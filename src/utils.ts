import course from './assets/course-1.webp'
import course2 from './assets/course-2.webp'
import course3 from './assets/course-3.webp'
import course4 from './assets/course-4.webp'
import course5 from './assets/course-5.webp'
import course6 from './assets/course-6.webp'

import profile1 from './assets/profile-1.webp';
import profile2 from "./assets/profile-2.webp";
import profile3 from "./assets/profile-3.webp";
import profile4 from "./assets/profile-4.webp";
import profile5 from "./assets/profile-5.webp";
import profile6 from "./assets/profile-6.webp";


// Data for Popular Component
export const courses = [
  {
    title: "Web Development Bootcamp",
    time: 6,
    student: 120,
    rate: 4.1,
    price: 120,
    img: course
  },
  {
    title: "Data Science Fundamentals",
    time: 4,
    student: 40,
    rate: 4.8,
    price: 180,
    img: course2
  },
  {
    title: "UI/UX Design Course",
    time: 3,
    student: 60,
    rate: 4.8,
    price: 50,
    img: course3
  },
  {
    title: "Mobile App Development",
    time: 5,
    student: 70,
    rate: 4.2,
    price: 180,
    img: course4
  },
  {
    title: "Digital Marketing Essentials",
    time: 2,
    student: 40,
    rate: 4.2,
    price: 80,
    img: course5
  },
  {
    title: "Project Management Basics",
    time: 1,
    student: 220,
    rate: 4.1,
    price: 50,
    img: course6
  }
];

// Data for Review Component
export const reviews = [
  {
    name: "John",
    job: "Software Engineer",
    text: "This course helped me transition to a software engineering role. The materials were comprehensive and the instructors were experienced.",
    img: profile1
  },
  {
    name: "Michael",
    job: "Data Scientist",
    text: "The curriculum was well-structured and easy to follow. Thanks to this course, I was able to land my dream job as a data scientist.",
    img: profile2
  },
  {
    name: "Robert",
    job: "Web Developer",
    text: "The course was practical and up-to-date, and the instructors were engaging. Now I work as a web developer.",
    img: profile3
  },
  {
    name: "William",
    job: "UX Designer",
    text: "I loved this course. The instructors were knowledgeable and the curriculum was well-structured. I recommend this to anyone interested in UX design.",
    img: profile4
  },
  {
    name: "David",
    job: "Product Manager",
    text: "The instructors were experienced and knowledgeable, and the materials were comprehensive. Thanks to this course, I transitioned into a product management role.",
    img: profile5
  },
  {
    name: "Christopher",
    job: "Digital Marketer",
    text: "The instructors were engaging and the content was practical. Thanks to this course, I learned a lot and was able to apply it immediately in my job.",
    img: profile6
  }
];

// Data for Instructor Component
export const instructors = [
  {
    name: "Alice",
    jobPosition: "Senior Developer",
    text: "Learn to code with ease and build your own amazing apps!",
    img: profile1
  },
  {
    name: "Bob",
    jobPosition: "Data Scientist",
    text: "Explore the world of data science and unlock new opportunities!",
    img: profile2
  },
  {
    name: "Charlie",
    jobPosition: "UX Designer",
    text: "Design intuitive and user-friendly interfaces for happy users!",
    img: profile3
  }
];

// Data for Footer Component
export const footer = [
  ['Home', 'Services','Training','Resources', 'About Us'],
  ['SME', 'Solution', 'Reviews', 'Blog'],
  ['Contsct Us', 'Place A Call', 'Email', 'Wischool@gmailcom'],
  ['Job Opening', 'News', 'Research'],
  ['Uk Privacy policy', 'terms Of Use']
]

// Function for detected viewport
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export { getWindowDimensions };