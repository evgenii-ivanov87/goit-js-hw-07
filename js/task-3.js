const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const toImgGallery = document.querySelector('#gallery')
const createImgCard = images => {
    const imgList = document.createElement('li');
    imgList.classList.add('img-list')
    const toImgList = document.createElement('img');
  toImgList.classList.add('img-products')
  toImgList.src = images.url   
  toImgList.alt = images.alt    
  imgList.append(toImgList)    
    return imgList;
}
 const imgGallery = images.map(image => createImgCard(image))
toImgGallery.append(...imgGallery)


