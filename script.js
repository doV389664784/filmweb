// 评分数据
const ratings = {
    movies: {
        1: { douban: 8.9, imdb: 8.1 },  // 杀人回忆
        2: { douban: 8.8, imdb: 8.6 },  // 寄生虫
        3: { douban: 8.7, imdb: 7.9 },  // 共同警备区
        4: { douban: 9.3, imdb: 8.7 },  // 星际穿越
        5: { douban: 8.8, imdb: 7.8 },  // 情书
        6: { douban: 7.7, imdb: 6.9 }   // 环太平洋
    },
    series: {
        1: { douban: 9.4, imdb: 8.8 },  // 暗黑 第一季
        2: { douban: 9.7, imdb: 8.9 },  // 暗黑 第二季
        3: { douban: 9.6, imdb: 8.7 }   // 暗黑 第三季
    }
};

// 创建电影卡片
function createMovieCard(item, type = 'movie') {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="info">
            <h3 class="title">${item.title}</h3>
            <p class="year">${item.year}</p>
        </div>
    `;

    // 添加点击事件
    card.addEventListener('click', () => {
        window.location.href = `details.html?id=${item.id}&type=${type}`;
    });

    return card;
}

// 加载电影和剧集
function loadContent() {
    const movieGrid = document.querySelector('.movie-grid');
    const seriesGrid = document.querySelector('.series-grid');

    if (movieGrid) {
        movies.forEach(movie => {
            movieGrid.appendChild(createMovieCard(movie, 'movie'));
        });
    }

    if (seriesGrid) {
        series.forEach(serie => {
            seriesGrid.appendChild(createMovieCard(serie, 'series'));
        });
    }
}

// 处理详情页面
function loadDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const type = params.get('type');

    const item = type === 'movie' 
        ? movies.find(m => m.id === id)
        : series.find(s => s.id === id);

    if (!item) return;

    document.title = `${item.title} - Flim`;

    const rating = ratings[type === 'movie' ? 'movies' : 'series'][id];
    const movieHeader = document.querySelector('.movie-header');
    if (!movieHeader) return;

    movieHeader.innerHTML = `
        <div class="movie-poster">
            <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="movie-info">
            <h1 class="movie-title">${item.title}</h1>
            <div class="movie-meta">
                <span class="year">${item.year}</span>
                ${type === 'movie' 
                    ? '<span class="duration">120分钟</span>'
                    : `<span class="episodes">第${item.season}季 / 共${item.episodes}集</span>`
                }
                <span class="type">${type === 'movie' ? '电影' : '剧集'}</span>
                <span class="genre">${item.genre.join(' / ')}</span>
            </div>
            <div class="movie-rating">
                <a href="${item.doubanLink}" target="_blank" class="rating-item douban-rating" style="text-decoration: none; color: inherit;">
                    <div class="rating-header">
                        <img src="images/douban-logo.png" alt="豆瓣" class="rating-icon">
                        <span class="rating-title">豆瓣评分</span>
                    </div>
                    <div class="rating-content">
                        <span class="rating-score">${rating.douban}</span>
                        <span class="rating-max">/10</span>
                    </div>
                </a>
                <a href="${item.imdbLink}" target="_blank" class="rating-item imdb-rating" style="text-decoration: none; color: inherit;">
                    <div class="rating-header">
                        <img src="images/imdb-logo.png" alt="IMDb" class="rating-icon">
                        <span class="rating-title">IMDb评分</span>
                    </div>
                    <div class="rating-content">
                        <span class="rating-score">${rating.imdb}</span>
                        <span class="rating-max">/10</span>
                    </div>
                </a>
            </div>
            <div class="movie-description">
                <h2>剧情简介</h2>
                <p>${item.description}</p>
            </div>
        </div>
    `;

    // 添加演职员表
    const castSection = document.querySelector('.cast-section');
    if (castSection) {
        let castHTML = `
            <div class="director-section">
                <h2 class="director-title">导演</h2>
                <div class="cast-list">
                    <div class="cast-item">
                        <img src="${item.director.image}" alt="${item.director.name}">
                        <div class="cast-info">
                            <div class="cast-name">${item.director.name}</div>
                            <div class="cast-role">导演</div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>主演</h2>
            <div class="cast-list">
                ${item.cast.map(actor => `
                    <div class="cast-item">
                        <img src="${actor.image}" alt="${actor.name}">
                        <div class="cast-info">
                            <div class="cast-name">${actor.name}</div>
                            <div class="cast-role">${actor.role}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        castSection.innerHTML = castHTML;
    }

    // 添加预告片
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer && item.trailer) {
        videoContainer.innerHTML = `
            <video controls width="100%" height="500">
                <source src="${item.trailer}" type="video/mp4">
                您的浏览器不支持 HTML5 视频播放。
            </video>
        `;
    }

    // 添加网盘链接
    const panLink = document.getElementById('pan-link');
    if (panLink && item.panLink) {
        panLink.href = item.panLink;
        panLink.textContent = item.panLink;
        panLink.target = "_blank"; // 添加在新窗口打开的属性
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 根据页面类型执行不同的加载函数
    if (document.querySelector('.movie-detail')) {
        loadDetails();
    } else {
        loadContent();
    }

    // 处理导航栏滚动效果
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#000000';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
}); 