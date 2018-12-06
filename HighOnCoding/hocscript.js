// main container
    var container = document.getElementById('container-fluid')
    
    //navbar
    var nav = document.createElement('nav');
    nav.setAttribute("class", "navbar navbar-expand navbar-dark p-4");
    nav.setAttribute("style", "background-color: rgb(82, 167, 250);");
    container.appendChild(nav)

//div container
    var div = document.createElement('div');
    div.setAttribute("class", "nav navbar-nav h3");
    nav.appendChild(div);

    //links
    //a1
    var a1 = document.createElement('a');
    a1.setAttribute('class', "nav-item nav-link active");
    a1.setAttribute('href', "#");
    a1.textContent = "HighOnCoding";
    div.appendChild(a1);

    //a2
    var a2 = document.createElement('a');
    a2.setAttribute('class', "nav-item nav-link active small pl-5");
    a2.setAttribute('href', "#");
    a2.textContent = "Home";
    div.appendChild(a2);


    //a3
    var a3 = document.createElement('a');
    a3.setAttribute('class', "nav-item nav-link small pl-5");
    a3.setAttribute('href', "#");
    a3.textContent = "Categories";
    div.appendChild(a3);


//content container
    var divA = document.createElement('div');
    divA.setAttribute('class', "container");
    container.appendChild(divA);

//div 1 - Curse content
    var div1 = document.createElement('div');
    div1.setAttribute('class', "p-4 mt-4");
    div1.setAttribute('style', "background-color: rgb(198, 206, 216);" )
    divA.appendChild(div1)

    //h1
    var h1 = document.createElement('h1');
    h1.setAttribute('class', "h1")
    h1.setAttribute('style', "background-color: rgb(198, 206, 216);")
    h1.textContent = 'Curse of the Current Reviews'
    div1.appendChild(h1)

    //p
    var p = document.createElement('p');
    p.textContent = `When you want to buy any application from the Apple iTubes store you have more choices that you can handle.
    Most of the users scroll past the application description completely avoiding it like ads displayed on
    the right column of your webpage. Their choice is dependent on three important factors price, screenshot,
    and reviews.`
    div1.appendChild(p)

//div 2 - Watchkit Content
    var div2 = document.createElement('div')
    divA.appendChild(div2)
    //h4
    var h4 = document.createElement('h4')
    h4.setAttribute('class', "h4 pt-4")
    h4.setAttribute('style', "color: rgb(6, 101, 192);")
    h4.textContent = "Hello Watchkit"
    div2.appendChild(h4)
    //p1
    var p1 = document.createElement('p')
    p1.textContent = `Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK
    release. The WatchKit framework enables the developers to create Apple Watch applications. In this article
    we are going to focus on the basics of getting started with the WatchKit and developing apps for the
    Apple Watch.`
    div2.appendChild(p1)

    var p2 = document.createElement('p')
    p2.setAttribute('class', 'pl-2')
    p2.setAttribute('style', "color: white; background-color: rgb(243, 144, 24);")
    p2.textContent = "12 comments 124 likes"
    div2.appendChild(p2)

//div 3 - Swift Content
    var div3 = document.createElement('div')
    divA.appendChild(div3)
    //h4
    var h4b = document.createElement('h4')
    h4b.setAttribute('class', "h4b pt-4")
    h4b.setAttribute('style', "color: rgb(6, 101, 192);")
    h4b.textContent = "Introduction to Swift"
    div2.appendChild(h4b)
    //p1
    var p1b = document.createElement('p')
    p1b.textContent = `Swift is a modern programming language developed by apple to create the next generation of iOS ans OSX applications.
    Swift is a fairly new language and still in development but it clearly reflects the intentions and the
    future direction. This article will revolve around the basic concepts in the Swift language and how you
    can get started.`
    div2.appendChild(p1b)

    var p2b = document.createElement('p')
    p2b.setAttribute('class', 'pl-2')
    p2b.setAttribute('style', "color: white; background-color: rgb(243, 144, 24);")
    p2b.textContent = "12 comments 124 likes"
    div2.appendChild(p2b)


