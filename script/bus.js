document.getElementById('add-btn').addEventListener('click', function(){
    document.button.style.backgroundColor = 'yellowgreen';
})
const allBtn = document.getElementById('add-btn');
const perTicketPrice = 550;
let count = 0;
for (const btn of allBtn){
    btn.addEventListener('click',function(){
        count = count + 1;
    })
}