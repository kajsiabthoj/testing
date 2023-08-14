<template>
  <v-card flat>
    <v-card-title> {{ item.name }} </v-card-title>
    <v-card-subtitle> {{ item.b }} ({{ item.tel }}) </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.name"
            dense
            hide-details="auto"
            label="ຊື່ເຕັມ"
          ></v-text-field>
          <div class="grey--text">* ຕ້ອງປ້ອນ ທ້າວ ຫຼື ນາງ ສະເຫມີ</div>
          <div class="grey--text">* ຖ້າບໍ່ມີນາມສະກຸນ ປ້ອນ Space ແທນ</div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.birthDate"
            dense
            hide-details="auto"
            label="ວັນເດືອນປີເກີດ"
          ></v-text-field>
          <div class="grey--text">* ຕ້ອງປ້ອນປີເດືອນວັນ</div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.phoneNumber"
            dense
            hide-details="auto"
            label="ເບີໂທລະສັບ"
          ></v-text-field>
          <div class="grey--text">* ຕ້ອງປ້ອນ 20 ຫຼື 30 ນາມຫນ້າ</div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.interviewDate"
            dense
            hide-details="auto"
            label="ວັນເດືອນປີສຳພາດ"
          ></v-text-field>
          <div class="grey--text">* ຕ້ອງປ້ອນປີເດືອນວັນ</div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      <div v-if="response.data" class="primary--text">
        <a :href="response.data" target="_blank">
          {{ response.data }}
        </a>
      </div>
      <div v-if="response.error" class="error--text">
        {{ response?.msg?.error }}
        {{ response }}
        <div>ບໍ່ສຳເລັດ, ລອງປ່ຽນຊື່ ຫຼື ນາມສະກຸນ</div>
      </div>
      <v-btn :disabled="response.data ? true : false" color="primary" small :loading="loading" @click="inserting">ເພີ່ມ</v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    date: {
      type: String,
      default: () => null,
    },
  },
  data() {
    return {
      form: {
        name: null,
        birthDate: null,
        phoneNumber: null,
        interviewDate: null,
      },
      response: {
        error: null,
        data: null,
      },
      loading: false
    };
  },
  watch: {
    date(value) {
      this.form.interviewDate = value;
    },
  },
  mounted() {
    this.form.name = this.item.name;
    this.form.birthDate = this.item.b;
    this.form.phoneNumber = this.item.tel;
    this.form.interviewDate = this.date;
  },
  methods: {
    async inserting() {
      if(this.form.name.split(' ').length !== 3) {
        return;
      }
      if(!this.form.name || !this.form.birthDate || !this.form.phoneNumber || !this.form.interviewDate) {
        return;
      }
      if (window.confirm("ກະລຸນາກວດສອບຂໍ້ມູນໃຫ້ລະອຽດກ່ອນ")) {
        this.response = {};
        this.loading = true
        const response = await this.$axios
          .post("http://34.207.66.211:1234/format", this.form)
          .then((data) => {
            this.response = data.data;
          })
          .catch((error) => {
            if (error?.request?.response) {
              this.response = { error: true, msg: JSON.parse(error?.request?.response) };
            } else {
              this.response = { error: true };
            }
          });
          this.loading = false
      }

    },
  },
};
</script>
