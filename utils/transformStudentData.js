// utils/transformStudentData.js
export function transformStudentsToBulkPayload(students) {
  return students.map((student, index) => ({
    firstname: student.name?.split(' ')[0] || `Student${index + 1}`,
    lastname: student.name?.split(' ').slice(1).join(' ') || 'User',
    country: "Nigeria",
    password: generateRandomPassword(),
    bio: "",
    organizationId: "685ec1191008ea7cff78dbc8",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: student.email,
    phone: student.phone || "",
    type: "STUDENT"
  }));
}

// function generateRandomPassword() {
//   const length = 12;
//   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     password += charset.charAt(Math.floor(Math.random() * charset.length));
//   }
//   return password;
// }