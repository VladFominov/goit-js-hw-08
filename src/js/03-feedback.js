import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const formRef = document.querySelector('.feedback-form');

const textareaRef = document.querySelector('.feedback-form textarea');


const emailRef = document.querySelector('.feedback-form input');
console.log(emailRef)

let formData = {};
populateInput();

const onFormSubmit = (e) => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;
    console.log({email, message})
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

const onInput = (e) => { 
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInput() {  
    const saveFormData = localStorage.getItem(STORAGE_KEY);
    formData = JSON.parse(saveFormData) || {};
    if (formData) {
    emailRef.value = formData.email || "";  
    textareaRef.value = formData.message || ""}
    }
 

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);





// 1.Відстежуй на формі подію input,
// і щоразу записуй у локальне сховище об'єкт з полями email
//  і message, у яких зберігай поточні значення полів форми.
//  Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища,
//     і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми,
//     а також виводь у консоль об'єкт з полями email,
//      message та їхніми поточними значеннями.
// 4.Зроби так, щоб сховище оновлювалось не частіше,
//     ніж раз на 500 мілісекунд.Для цього додай до проекту і
//      використовуй бібліотеку lodash.throttle.
