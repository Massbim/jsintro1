// 1. buat variabel
const biodata = {
  name: "Alamsyah Bimasakti Qobus Nur Rahman",
  age: 23,
  hobbies: ["travelling", "mendengarkan musik", "olahraga"],
  isMerried: false,
  schoolList: [
    {
      name: "SD Islam Putradarma",
      yearIn: 2005,
      yearOut: 2011,
      major: null,
    },
    {
      name: "SMPN 2 Cibitung",
      yearIn: 2011,
      yearOut: 2014,
      major: null,
    },
    {
      name: "SMKN 2 Cikarang Barat",
      yearIn: 2014,
      yearOut: 2017,
      major: "Teknik Komputer dan Jaringan",
    },
  ],
  skills: [
    {
      skillName: "HTML",
      level: "Advanced",
    },
    {
      skillName: "CSS",
      level: "Beginner",
    },
    {
      skillName: "Javascript",
      level: "Beginner",
    },
  ],
  interestInCoding: true,
};
// console.log(biodata);

// 2. program rata rata UN beserta gradenya
// nilai pelajaran
const mtk = 98;
const bahasaInggris = 100;
const bahasaIndo = 99;
const ipa = 88;
let nilai = (mtk + bahasaInggris + bahasaIndo + ipa) / 4;
// validasi
if (mtk == "" || bahasaIndo == "" || bahasaInggris == "" || ipa == "") {
  console.log("Input is empty");
} else if (isNaN(mtk) || isNaN(bahasaInggris) || isNaN(bahasaIndo) || isNaN(ipa)) {
  console.log("Input is Not a Number");
} else if (typeof mtk === "string" || typeof bahasaInggris === "string" || typeof bahasaIndo === "string" || typeof ipa === "string") {
  console.log("input is string");
} else if (mtk > 100 || bahasaIndo > 100 || bahasaInggris > 100 || ipa > 100) {
  console.log("nilai lebih dari 100");
}
//menentukan grade
else if (nilai >= 90 && nilai <= 100) {
  console.log(`Rata-rata = ${nilai} \ngrade = A`);
} else if (nilai >= 80 && nilai < 90) {
  console.log(`Rata-rata = ${nilai} \ngrade = B`);
} else if (nilai >= 70 && nilai < 80) {
  console.log(`Rata-rata = ${nilai} \ngrade = C`);
} else if (nilai >= 60 && nilai < 70) {
  console.log(`Rata-rata = ${nilai} \ngrade = D`);
} else {
  console.log(`Rata-rata = ${nilai} \ngrade = E`);
}

// 3. Buat segitiga terbalik
function printSegitiga(num) {
  let hasil = "";
  if (isNaN(num)) {
    console.log("Input is not Number");
  } else {
    for (let i = num; i > 0; i--) {
      for (let j = 1; j <= i; j++) {
        hasil += `${j} `;
      }
      hasil += "\n";
    }
  }
  return hasil;
}
console.log(printSegitiga(5));

// 4. data
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
// ubah dengan spread operator
const dataNew = {
  ...data,
  name: "Alamsyah Bimasakti",
  username: "Bima",
  email: "alamsyahbima22@gmail.com",
  hobby: ["travelling", "mendengarkan musik", "olahraga"],
};
console.log(dataNew);

// ambil data street dan city dengan destructuring
const {
  address: { street, city },
} = data;
console.log(`${street}\n${city}`);

// tanpa destucturing
console.log(`${data.address.street}\n${data.address.city}`);
