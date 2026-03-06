import React from 'react'
import Card from './Card';

const MainPage = () => {
    const developers = [
  {
    username: "arjun_dev",
    age: 24,
    email: "arjun.dev@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/1.jpg",
    phoneNo: "9876543201",
    gender: "Male",
    designation: "Frontend Developer"
  },
  {
    username: "priya_codes",
    age: 26,
    email: "priya.codes@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
    phoneNo: "9876543202",
    gender: "Female",
    designation: "Backend Developer"
  },
  {
    username: "rohit_js",
    age: 25,
    email: "rohit.js@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
    phoneNo: "9876543203",
    gender: "Male",
    designation: "Full Stack Developer"
  },
  {
    username: "sneha_ui",
    age: 23,
    email: "sneha.ui@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/4.jpg",
    phoneNo: "9876543204",
    gender: "Female",
    designation: "UI Developer"
  },
  {
    username: "vishal_java",
    age: 27,
    email: "vishal.java@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/5.jpg",
    phoneNo: "9876543205",
    gender: "Male",
    designation: "Java Developer"
  },
  {
    username: "ananya_react",
    age: 24,
    email: "ananya.react@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/6.jpg",
    phoneNo: "9876543206",
    gender: "Female",
    designation: "React Developer"
  },
  {
    username: "karthik_node",
    age: 28,
    email: "karthik.node@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/7.jpg",
    phoneNo: "9876543207",
    gender: "Male",
    designation: "Node.js Developer"
  },
  {
    username: "megha_api",
    age: 26,
    email: "megha.api@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/8.jpg",
    phoneNo: "9876543208",
    gender: "Female",
    designation: "API Developer"
  },
  {
    username: "sandeep_sql",
    age: 29,
    email: "sandeep.sql@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/9.jpg",
    phoneNo: "9876543209",
    gender: "Male",
    designation: "Database Developer"
  },
  {
    username: "pooja_web",
    age: 22,
    email: "pooja.web@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/10.jpg",
    phoneNo: "9876543210",
    gender: "Female",
    designation: "Web Developer"
  },
  {
    username: "manoj_cloud",
    age: 30,
    email: "manoj.cloud@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/11.jpg",
    phoneNo: "9876543211",
    gender: "Male",
    designation: "Cloud Engineer"
  },
  {
    username: "kavya_uiux",
    age: 25,
    email: "kavya.uiux@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/12.jpg",
    phoneNo: "9876543212",
    gender: "Female",
    designation: "UI/UX Developer"
  },
  {
    username: "ajay_php",
    age: 28,
    email: "ajay.php@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/13.jpg",
    phoneNo: "9876543213",
    gender: "Male",
    designation: "PHP Developer"
  },
  {
    username: "neha_test",
    age: 27,
    email: "neha.test@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/14.jpg",
    phoneNo: "9876543214",
    gender: "Female",
    designation: "QA Engineer"
  },
  {
    username: "rahul_mobile",
    age: 26,
    email: "rahul.mobile@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/15.jpg",
    phoneNo: "9876543215",
    gender: "Male",
    designation: "Mobile App Developer"
  },
  {
    username: "isha_flutter",
    age: 24,
    email: "isha.flutter@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/16.jpg",
    phoneNo: "9876543216",
    gender: "Female",
    designation: "Flutter Developer"
  },
  {
    username: "deepak_python",
    age: 29,
    email: "deepak.python@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/17.jpg",
    phoneNo: "9876543217",
    gender: "Male",
    designation: "Python Developer"
  },
  {
    username: "richa_ml",
    age: 28,
    email: "richa.ml@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/18.jpg",
    phoneNo: "9876543218",
    gender: "Female",
    designation: "ML Engineer"
  },
  {
    username: "nitin_devops",
    age: 31,
    email: "nitin.devops@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/19.jpg",
    phoneNo: "9876543219",
    gender: "Male",
    designation: "DevOps Engineer"
  },
  {
    username: "shruti_angular",
    age: 25,
    email: "shruti.angular@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/20.jpg",
    phoneNo: "9876543220",
    gender: "Female",
    designation: "Angular Developer"
  },
  // ---- continuing till 35 ----
  {
    username: "amit_go",
    age: 32,
    email: "amit.go@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/21.jpg",
    phoneNo: "9876543221",
    gender: "Male",
    designation: "Golang Developer"
  },
  {
    username: "sonal_data",
    age: 27,
    email: "sonal.data@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/22.jpg",
    phoneNo: "9876543222",
    gender: "Female",
    designation: "Data Engineer"
  },
  {
    username: "harish_ios",
    age: 29,
    email: "harish.ios@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/23.jpg",
    phoneNo: "9876543223",
    gender: "Male",
    designation: "iOS Developer"
  },
  {
    username: "divya_android",
    age: 26,
    email: "divya.android@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/24.jpg",
    phoneNo: "9876543224",
    gender: "Female",
    designation: "Android Developer"
  },
  {
    username: "tarun_csharp",
    age: 30,
    email: "tarun.csharp@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/25.jpg",
    phoneNo: "9876543225",
    gender: "Male",
    designation: "C# Developer"
  },
  {
    username: "monika_bi",
    age: 28,
    email: "monika.bi@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/26.jpg",
    phoneNo: "9876543226",
    gender: "Female",
    designation: "BI Developer"
  },
  {
    username: "yash_block",
    age: 27,
    email: "yash.block@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/27.jpg",
    phoneNo: "9876543227",
    gender: "Male",
    designation: "Blockchain Developer"
  },
  {
    username: "nisha_ai",
    age: 25,
    email: "nisha.ai@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/28.jpg",
    phoneNo: "9876543228",
    gender: "Female",
    designation: "AI Engineer"
  },
  {
    username: "lokesh_sys",
    age: 33,
    email: "lokesh.sys@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/29.jpg",
    phoneNo: "9876543229",
    gender: "Male",
    designation: "System Engineer"
  },
  {
    username: "payal_support",
    age: 24,
    email: "payal.support@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/30.jpg",
    phoneNo: "9876543230",
    gender: "Female",
    designation: "Support Engineer"
  },
  {
    username: "sunil_lead",
    age: 35,
    email: "sunil.lead@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/31.jpg",
    phoneNo: "9876543231",
    gender: "Male",
    designation: "Tech Lead"
  },
  {
    username: "aarti_pm",
    age: 34,
    email: "aarti.pm@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/32.jpg",
    phoneNo: "9876543232",
    gender: "Female",
    designation: "Product Manager"
  },
  {
    username: "rakesh_arch",
    age: 38,
    email: "rakesh.arch@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/33.jpg",
    phoneNo: "9876543233",
    gender: "Male",
    designation: "Software Architect"
  },
  {
    username: "simran_hrtech",
    age: 29,
    email: "simran.hrtech@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/women/34.jpg",
    phoneNo: "9876543234",
    gender: "Female",
    designation: "HR Tech Analyst"
  },
  {
    username: "omkar_intern",
    age: 21,
    email: "omkar.intern@gmail.com",
    profileImg: "https://randomuser.me/api/portraits/men/35.jpg",
    phoneNo: "9876543235",
    gender: "Male",
    designation: "Software Intern"
  }
];

  return (
    <div>
        {
            developers.map((dev)=>{
                return <Card data={dev}/>
            })
        }
    </div>
  )
}

export default MainPage