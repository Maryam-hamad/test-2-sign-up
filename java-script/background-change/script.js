const color =[{ name: 'Pastel Pink', code: '#FFB3BA' },
  { name: 'Pastel Peach', code: '#FFDFBA' },
  { name: 'Pastel Yellow', code: '#FFFFBA' },
  { name: 'Pastel Mint', code: '#BAFFC9' },
  { name: 'Pastel Blue', code: '#BAE1FF' },
  { name: 'Lavender', code: '#D7BAFF' },
  { name: 'Rose Pink', code: '#FFC8DD' },
  { name: 'Green Tea', code: '#CDEAC0' },
  { name: 'Blush Pink', code: '#FEE1E8' },
  { name: 'Light Lime', code: '#E2F0CB' },
  { name: 'Cream Yellow', code: '#F1F0C0' },
  { name: 'Dreamy Lavender', code: '#D9D7F1' },
  { name: 'Pastel Aqua', code: '#B5EAD7' },
  { name: 'Baby Peach', code: '#FFDAC1' },
  { name: 'Orchid Lilac', code: '#E0BBE4' },
  { name: 'Soft Rose', code: '#F7DAD9' },
  { name: 'Icy Mint', code: '#C4FAF8' },
  { name: 'Greenish White', code: '#D0F4DE' },
  { name: 'Warm Sand', code: '#FAD6A5' },
  { name: 'Vintage Beige', code: '#F8EDD1' }
];


const bgContainer=document.querySelector('.container');
const bGbutton=document.getElementById('btn');
const colorCode=document.getElementById('current-color')

bGbutton.addEventListener('click',()=>{
  const randomindex=(Math.floor(Math.random()*color.length))
  const randomColor=color[randomindex];

 bgContainer.style.backgroundColor=randomColor.code;
 colorCode.textContent=(`Current Color is: ${randomColor.name}  ${randomColor.code}`)
 
 
});