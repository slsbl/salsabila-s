let blogs = [];

const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

function addBlog(e) {
    e.preventDefault();

    let title = document.getElementById('input-blog-title').value;
    let content = document.getElementById('input-blog-content').value;
    let image = document.getElementById('input-blog-image');
    let link = document.getElementById('input-blog-link').value;

    if (title == '' || image == '' || content == '' || link== '') {
        return alert('All input fields must be not empty');
    }
    image = URL.createObjectURL(image.files[0]);


    let blog = {
        author: 'Sal',
        title: title,
        link: link,
        image: image,
        content: content,
        postedAt: new Date(),
    };

    blogs.push(blog);


    renderBlog();
}

function renderBlog() {

    let blogContainer = document.getElementById('contents');


    for (let i = 0; i < blogs.length; i++) {

        console.log(blogs[i]);


        blogContainer.innerHTML += `
    <div id="${i}" class="blog-list-item">
      <div class="blog-image">
        <img src="${blogs[i].image}" alt="" />
      </div>
      <div class="blog-content">
        <div class="btn-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-post">Post Blog</button>
        </div>
        <h1>
          <a href="${blogs[i].link}" target="_blank"
            >${blogs[i].title}</a
          >
        </h1>
        <div class="detail-blog-content">
         ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
        </div>
        <p>${blogs[i].content}</p>
        <div style="text-align: right">
          <span style="font-size: 13px; color: grey">
          ${getDistanceTime(blogs[i].postedAt)}
          </span>
        </div>
      </div>
    </div>
    `;
    }
}

function getDistanceTime(time) {
    const distance = new Date() - new Date(time);


    const miliseconds = 1000;
    const secondsInMinute = 3600;
    const hoursInDay = 23;
    const dayDistance = distance / (miliseconds * secondsInMinute * hoursInDay);

    if (dayDistance >= 1) {
        return Math.floor(dayDistance) + ' day ago';
    } else {

        const hourDistance = Math.floor(distance / (1000 * 60 * 60));
        if (hourDistance > 0) {
            return hourDistance + ' hour ago';
        } else {

            const minuteDistance = Math.floor(distance / (1000 * 60));
            return minuteDistance + ' minute ago';
        }
    }
}

function getFullTime(time) {
    const date = time.getDate();
    const monthIndex = time.getMonth();
    const year = time.getFullYear();

    const hours = time.getHours();
    const minutes = time.getMinutes();

    return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}