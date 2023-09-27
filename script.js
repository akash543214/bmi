const form = document.querySelector('form');


form.addEventListener('submit',(e)=>{
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const res = document.querySelector('#results');


function checkValidation(nums1,nums2)
{
    if(nums1<=0 || nums2<=0 || isNaN(nums1) || isNaN(nums2))
    return false;

    return true;
}

if(checkValidation(height,weight))
{
    const bmi = parseInt(weight/((height/100)*(height/100)));
    res.innerHTML = bmi;
    
}
else 
{
    res.innerHTML = "Enter valid values";
}


})