function main() {
  const showsMain = document.querySelector('.shows');

  const searchInput = document.querySelector('.search input');

  function fetchShows() {
    fetch('https://api.tvmaze.com/shows')
      .then((shows) => {
        return shows.json();
      })
      .then((shows) => {
        displayShows(shows);
      });
  }

  fetchShows();

  function displayShows(shows) {
    console.log(shows);
    let showDiv;
    shows.forEach((show) => {
      let showCover;
      let showInfo;
      let showName;
      let showRating;
      let showReleaseDate;
      let showSummary;
      if (document.title == 'Tv Shows')
        if (show.id <= 40) {
          // console.log(show.id);
          showCover = `<img src = '${show.image.medium}' class = 'show-cover'> </img>`;
          showName = `<h3 class = 'show-name'> ${show.name} </h3>`;
          showRating = `<h3 class = 'show-rating'> ${show.rating.average} </h3> `;
          showReleaseDate = `<h5 class = 'show-date'> ${show.premiered} </h5>`;
          showInfo = `<div class = 'show-info'> ${showName} ${showRating} ${showReleaseDate} </div> `;
          showSummary = ` <div class = 'show-summary'> <h3> Overview </h3> ${show.summary} </div>`;
          showDiv = `<div class = 'show'> ${showCover} ${showInfo} ${showSummary}  </div>`;
          showsMain.innerHTML += showDiv;
        }
      if (document.title == 'Page 2') {
        console.log('ok');
        if (show.id <= 80 && show.id > 40) {
          // console.log(show.id);
          showCover = `<img src = '${show.image.medium}' class = 'show-cover'> </img>`;
          showName = `<h3 class = 'show-name'> ${show.name} </h3>`;
          showRating = `<h3 class = 'show-rating'> ${show.rating.average} </h3> `;
          showReleaseDate = `<h5 class = 'show-date'> ${show.premiered} </h5>`;
          showInfo = `<div class = 'show-info'> ${showName} ${showRating} ${showReleaseDate} </div> `;
          showSummary = ` <div class = 'show-summary'> <h3> Overview </h3> ${show.summary} </div>`;
          showDiv = `<div class = 'show'> ${showCover} ${showInfo} ${showSummary}  </div>`;
          showsMain.innerHTML += showDiv;
        }
      }
      if (document.title == 'Page 3') {
        console.log('ok');
        if (show.id <= 120 && show.id > 80) {
          // console.log(show.id);
          showCover = `<img src = '${show.image.medium}' class = 'show-cover'> </img>`;
          showName = `<h3 class = 'show-name'> ${show.name} </h3>`;
          showRating = `<h3 class = 'show-rating'> ${show.rating.average} </h3> `;
          showReleaseDate = `<h5 class = 'show-date'> ${show.premiered} </h5>`;
          showInfo = `<div class = 'show-info'> ${showName} ${showRating} ${showReleaseDate} </div> `;
          showSummary = ` <div class = 'show-summary'> <h3> Overview </h3> ${show.summary} </div>`;
          showDiv = `<div class = 'show'> ${showCover} ${showInfo} ${showSummary}  </div>`;
          showsMain.innerHTML += showDiv;
        }
      }

      if (document.title == 'Page 4') {
        console.log('ok');
        if (show.id <= 160 && show.id > 120) {
          // console.log(show.id);
          showCover = `<img src = '${show.image.medium}' class = 'show-cover'> </img>`;
          showName = `<h3 class = 'show-name'> ${show.name} </h3>`;
          showRating = `<h3 class = 'show-rating'> ${show.rating.average} </h3> `;
          showReleaseDate = `<h5 class = 'show-date'> ${show.premiered} </h5>`;
          showInfo = `<div class = 'show-info'> ${showName} ${showRating} ${showReleaseDate} </div> `;
          showSummary = ` <div class = 'show-summary'> <h3> Overview </h3> ${show.summary} </div>`;
          showDiv = `<div class = 'show'> ${showCover} ${showInfo} ${showSummary}  </div>`;
          showsMain.innerHTML += showDiv;
        }
      }
      if (document.title == 'Page 5') {
        console.log('ok');
        if (show.id <= 200 && show.id > 160) {
          // console.log(show.id);
          showCover = `<img src = '${show.image.medium}' class = 'show-cover'> </img>`;
          showName = `<h3 class = 'show-name'> ${show.name} </h3>`;
          showRating = `<h3 class = 'show-rating'> ${show.rating.average} </h3> `;
          showReleaseDate = `<h5 class = 'show-date'> ${show.premiered} </h5>`;
          showInfo = `<div class = 'show-info'> ${showName} ${showRating} ${showReleaseDate} </div> `;
          showSummary = ` <div class = 'show-summary'> <h3> Overview </h3> ${show.summary} </div>`;
          showDiv = `<div class = 'show'> ${showCover} ${showInfo} ${showSummary}  </div>`;
          showsMain.innerHTML += showDiv;
        }
      }
    });
    const allShows = document.querySelectorAll('.show');

    function filterShows() {
      console.log(allShows);
      const showNameElements = document.querySelectorAll('.show-name');
      searchInput.addEventListener('input', function (e) {
        const smallLetters = e.target.value.toLowerCase();
        console.log(smallLetters);
        allShows.forEach((show) => {
          const showName = show.children[1].children[0];
          const showNameText = showName.textContent.trim();
          console.log(showNameText.toLowerCase().indexOf(smallLetters));
          // Filtering based on first letter and then on rest of other letters//
          if (showNameText.toLowerCase().indexOf(smallLetters) == 0) {
            show.style.display = 'flex';
            console.log('ok');
          } else {
            show.style.display = 'none';
          }
        });
      });
    }
    filterShows();
  }
}

main();

console.log(location);
