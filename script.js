const api_base = 'https://edumate-api.herokuapp.com/';
// const api_base = 'http://localhost:1337/';
$(document).ready(() => {
    var apiUrl = api_base + 'home';
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        // header section
        $("#header_api").html(marked.parse(data.header));
        $("#sub_header_api").html(marked.parse(data.sub_header));

        // features section
        let features = data.features;
        features.forEach(feature => {
            document.getElementById("features_api").innerHTML +=
                `<div class="pp col-md-3 d-flex flex-column py-md-0 py-5">
          ${feature.icon}
          <span class="lead fs-4">${feature.text}</span>
          </div>`;
        });

        // footer section
        $("#footer_text_api").html(marked.parse(data.footer.text));
        let socials = data.footer.social;
        socials.forEach(social => {
            document.getElementById("footer_social_api").innerHTML +=
                `<li class="ms-3"><a class="link-dark" href='${social.link}'>${social.icon}</a></li>`
        })

    }).catch(err => {
        console.log(err);
    });

    var apiCourse = api_base + 'step';
    fetch(apiCourse).then(response => {
        return response.json();
    }).then(data => {
        let steps = data.step;
        steps.forEach(step => {
            document.getElementById("module_accord").innerHTML +=
                `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading-${step.id}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#step-${step.id}" aria-expanded="true" aria-controls="collapseOne">
                    ${step.title}
                    </button>
                </h2>
                <div id="step-${step.id}" class="accordion-collapse collapse ${ (step.id == 3) ? 'show' : '' }" aria-labelledby="heading-${step.id}" data-bs-parent="#module_accord">
                    <div class="accordion-body"></div>
                </div>
            </div>
            `
        });
    }).catch(err => {
        console.log(err);
    });
})

