<template>
  <div>
    <div class="my-5">
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="interviewDate"
            dense
            hide-details="auto"
            label="ມື້ນັດ"
          ></v-text-field>
          <div class="grey--text">* ຕ້ອງປ້ອນປີເດືອນວັນ</div>
        </v-col>
      </v-row>
    </div>
    <Name
      v-for="(name, index) in names"
      :key="index"
      :item="name"
      :date="interviewDate"
      class="mb-2"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      interviewDate: null,
      names: [
        { name: "ນາງ ຄຳເເພງ ນາມສຸດາ", b: "2004-12-04", tel: "2075528124" },
        { name: "ນາງ ປ່າຮົວທໍ່ ", b: "2002-01-02", tel: "2076092219" },
        { name: "ນາງ ແອ່ນ ", b: "1998-09-07", tel: "2099441664" },
        { name: "ນາງ ລິນດາ ພົມມະຈັນ", b: "1994-11-07", tel: "305775136" },
        { name: "ນາງ ນໍ້າຝົນ ອິນທະວົງ", b: "2001-11-01", tel: "2092582515" },
        { name: "ນາງ ຈັນທະຈອນ ອິນທະວົງ", b: "1995-10-04", tel: "2096758473" },
        {
          name: "ນາງ ມະໃລສອນ ເເກ້ວປະດັບລີ",
          b: "1994-02-10",
          tel: "2058072642",
        },
        { name: "ນາງ ພອຍ ແສນຂັນ", b: "1993-04-19", tel: "2076589001" },
        { name: "ນາງ ຄຳໃສ ", b: "1995-08-07", tel: "2096455175" },
        { name: "ນາງ ໂມລິຕ່າ ວັນນະສອນ", b: "1998-06-10", tel: "2052441725" },
        { name: "ນາງ ປານ້ອຍ ວັນນະສອນ", b: "2000-03-10", tel: "2076343179" },
        {
          name: "ທ້າວ ວິລະທະນະກອນ ລາວົງວິໃລ",
          b: "1993-01-20",
          tel: "2072644268",
        },
        { name: "ທ້າວ ສຸລີ ສີສະວອນຄຳ", b: "2003-10-10", tel: "2094457221" },
        { name: "ທ້າວ ເກດສະໜາ ສີຫານົນ", b: "1990-09-08", tel: "305422553" },
        { name: "ທ້າວ ພັນມະນີ ສີຫານົນ", b: "2000-05-12", tel: "305422553" },
        { name: "ທ້າວ ໂຍຄີ ", b: "1990-08-16", tel: "2055350922" },
        { name: "ທ້າວ ຍົງ ພົງສະຫວັນ", b: "1995-03-06", tel: "305445925" },
        { name: "ທ້າວ ບຸນທັນ ວັນທະວົງ", b: "1982-05-20", tel: "2076233289" },
        { name: "ທ້າວ ຄຳໃບ ສູນທະວົງ", b: "1994-11-04", tel: "2099696756" },
        { name: "ທ້າວ ໃທຕັ່ນ ພົມພິພັກ", b: "2005-05-18", tel: "2052488353" },
        { name: "ທ້າວ ແສງ ວັນນະສອນ", b: "2000-03-10", tel: "2062582641" },
        { name: "ທ້າວ ບຸນມາກ ບຸນລິດສະວົງ", b: "2000-02-15", tel: "2063411426" },
        { name: "ນາງ ນູຫັງ ", b: "2004-11-22", tel: "305734576" },
        { name: "ນາງ ຕານ້ອຍ ອິນທະວົງ", b: "1997-08-31", tel: "2072542884" },
        { name: "ນາງ ຈິດຕາ ຂຸນທະວົງ", b: "2010-02-10", tel: "307669845" },
        { name: "ນາງ ດອກຊ້ອນ ຈັນສົມພູ", b: "1998-11-08", tel: "2097600759" },
        { name: "ທ້າວ ເມທີ ເເກ້ວທຳມະຈັກ", b: "1999-10-09", tel: "2028777895" },
        { name: "ນາງ ເຢື່ອຄຳ ວົງໄຊ", b: "1988-03-15", tel: "2023322252" },
        { name: "ນາງ ກ້າຢ່າ ", b: "2003-02-23", tel: "2077678121" },
        { name: "", b: "1999-10-09", tel: "2028777895" },
        { name: "ນາງ ຕາອົ້ນ ຂັນທະວີໄຊ", b: "1992-03-11", tel: "2052522729" },
        { name: "ທ້າວ ຄຳຕັນ ແກ້ວນຳໂຊກ", b: "1980-07-10", tel: "309968965" },
        { name: "ນາງ ຄຳເສົາ ຈັນທະວົງ", b: "1970-02-04", tel: "2028887505" },
      ],
    };
  },
  mounted() {
    this.interviewDate = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`;
  },
};
</script>
