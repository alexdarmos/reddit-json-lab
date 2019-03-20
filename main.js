$(() => {
    $.get({
        url: "https://www.reddit.com/r/aww/.json",
        Method: "GET",
    
    }).fail((err) => {
        console.error(`You have errors: ${err}`);

    }).done((data) => {
        console.log(data);
        let children =data.data.children;
    
        $.each(children, function(key, value) {
            let title = value.data.title;
            let thumbnail = value.data.thumbnail;
            let url = value.data.url;
            console.log(title);
            $('#parent').append(`<a href="${url}" target="_blank"><div id="container">
            <p id="title">${title}</p>
            <div id="thumbnail"><img src="${thumbnail}"/></div>
        </div></a>`)
            return key < 9;
        })




    })
    
    
    
    
    
    
    
    })