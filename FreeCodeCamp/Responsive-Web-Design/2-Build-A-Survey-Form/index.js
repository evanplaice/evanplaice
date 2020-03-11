window.onload = function() {
  const form = document.getElementById('survey-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(`Name: ${formData.get('name')}`);
    console.log(`eMail: ${formData.get('email')}`);
    console.log(`Age: ${formData.get('age')}`);
    console.log(`Role: ${formData.get('role')}`);
    console.log(`Recommend: ${formData.get('user-recommend')}`);
    console.log(`Favorite: ${formData.get('most-like')}`);
    console.log('Improve:')
    formData.getAll('prefer').map(item => console.log(`- ${item}`));
    console.log('Comments:');
    console.log(formData.get('comments'));

    return false;
  })
}
