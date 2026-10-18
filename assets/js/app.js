const setRating = (rating) => {
    if (rating >= 7) {
        return "badge-success";
    } else if (rating >= 5 && rating < 7) {
        return "badge-warning";
    } else {
        return "badge-danger";
    }
};

let result = "";

movieArr.forEach((params) => {
    result += `
        <div class="col-sm-4 mt-3">
            <div class="card">
                <figure class="movieCard m-0">
                    <img
                        src="https://image.tmdb.org/t/p/w1280/${params.backdrop_path || params.poster_path}"
                        alt="${params.title || params.original_title}"
                        title="${params.title || params.original_title}"
                        class="img-fluid"
                    >

                    <figcaption>
                        <div class="titleInfo">
                            <div class="row">
                                <div class="col-9">
                                    <h2>${params.title || params.original_title}</h2>
                                </div>

                                <div class="col-3">
                                    <h3>
                                        <span class="badge ${setRating(params.vote_average)}">
                                            ${params.vote_average}
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="overView">
                            <h5>${params.title || params.original_title}</h5>
                            <p>${params.overview}</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    `;
});

const cardInfo = document.getElementById("cardInfo");
cardInfo.innerHTML = result;
