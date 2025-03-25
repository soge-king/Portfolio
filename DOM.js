
$(function () {
    // Define content sets for different categories
    const contentSetsAA = {
        webapps: {
            headers: ["Web App #1", "Web App #2", "Web App #3"],
            contents: [
                "This is a description for Web App 1.",
                "Web App 2 is designed for automation.",
                "Web App 3 integrates with cloud services."
            ],
            carouselImages: [
                "../assets/images/mechbee.png",
                "../assets/images/profile-pic.png",
                "../assets/images/themanofuncle.jpg"
            ]
        },
        bots: {
            headers: ["Bot #1", "Bot #2", "Bot #3"],
            contents: [
                "Bot 1 automates social media tasks.",
                "Bot 2 is a chatbot for customer support.",
                "Bot 3 performs data scraping operations."
            ],
            carouselImages: [
                "../assets/images/profile-pic.png",
                "../assets/images/mechbee.png",
                "../assets/images/themanofuncle.jpg"
            ]
        },
        cybersec: {
            headers: ["bug #1", "hack #2", "patch #3"],
            contents: [
                "Some bug bounties",
                "Game 2 is a strategy simulation.",
                "Game 3 is a puzzle game with unique mechanics."
            ],
            carouselImages: [
                "../assets/images/themanofuncle.jpg",
                "../assets/images/mechbee.png",
                "../assets/images/profile-pic.png"
            ]
        },
    };
    const contentSetsBB = {
        vscode: {
            headers: ["VS1 #1", "VS2 #2", "VS3 #3"],
            contents: [
                "Bot 1 automates social media tasks.",
                "Bot 2 is a chatbot for customer support.",
                "Bot 3 performs data scraping operations."
            ],
            carouselImages: [
                "../assets/images/profile-pic.png",
                "../assets/images/mechbee.png",
                "../assets/images/themanofuncle.jpg"
            ]
        },
        godot: {
            headers: ["GD #1", "GD #2", "GD #3"],
            contents: [
                "Bot 1 automates social media tasks.",
                "Bot 2 is a chatbot for customer support.",
                "Bot 3 performs data scraping operations."
            ],
            carouselImages: [
                "../assets/images/profile-pic.png",
                "../assets/images/mechbee.png",
                "../assets/images/themanofuncle.jpg"
            ]
        },
        unity: {
            headers: ["U #1", "U #2", "U #3"],
            contents: [
                "Bot 1 automates social media tasks.",
                "Bot 2 is a chatbot for customer support.",
                "Bot 3 performs data scraping operations."
            ],
            carouselImages: [
                "../assets/images/profile-pic.png",
                "../assets/images/mechbee.png",
                "../assets/images/themanofuncle.jpg"
            ]
        },
        gamemaker: {
            headers: ["GM #1", "GM #2", "GM #3"],
            contents: [
                "Bot 1 automates social media tasks.",
                "Bot 2 is a chatbot for customer support.",
                "Bot 3 performs data scraping operations."
            ],
            carouselImages: [
                "../assets/images/profile-pic.png",
                "../assets/images/mechbee.png",
                "../assets/images/themanofuncle.jpg"
            ]
        },
    }


    // Handle clicks on the top buttons to change accordion content
    // AA content
    $("#webapps-btn").on("click", function() {
        updateAccordionAA("webapps");
        $(".active-category").removeClass("active-category");
        $(this).addClass("active-category").data("category", "webapps");
    });

    $("#bots-btn").on("click", function() {
        updateAccordionAA("bots");
        $(".active-category").removeClass("active-category");
        $(this).addClass("active-category").data("category", "bots");
    });

    $("#cybersec-btn").on("click", function() {
        updateAccordionAA("cybersec");
        $(".active-category").removeClass("active-category");
        $(this).addClass("active-category").data("category", "cybersec");
    });

    //BB content
    $("#vs-btn").on("click", function() {
        updateAccordionBB("vscode");
        $(".active-category").removeClass("active-category");
        $(this).addClass("active-category").data("category", "vscode");
    });

    $("#godot-btn").on("click", function() {
        updateAccordionBB("godot");
        $(".active-category").removeClass("active-category");
        $(this).addClass("active-category").data("category", "godot");
    });

    $("#unity-btn").on("click", function() {
        updateAccordionBB("unity");
        $(".active-category").removeClass("active-category");
        $(this).addClass("active-category").data("category", "unity");
    });

    $("#gamemaker-btn").on("click", function() {
        updateAccordionBB("gamemaker");
        $(".active-category").removeClass("active-category");
        $(this).addClass("active-category").data("category", "gamemaker");
    });

    // Function to update the accordion content
    function updateAccordionAA(category) {
        if (!contentSetsAA[category]) return;

        // Update accordion headers
        $(".projectA1").text(contentSetsAA[category].headers[0]);
        $(".projectA2").text(contentSetsAA[category].headers[1]);
        $(".projectA3").text(contentSetsAA[category].headers[2]);

        // Update accordion body content
        $("#collapseA1 .accordion-body").html(contentSetsAA[category].contents[0]);
        $("#collapseA2 .accordion-body").html(contentSetsAA[category].contents[1]);
        $("#collapseA3 .accordion-body").html(contentSetsAA[category].contents[2]);
    }
    function updateAccordionBB(category) {
        if (!contentSetsBB[category]) return;

        // Update accordion headers
        $(".projectB1").text(contentSetsBB[category].headers[0]);
        $(".projectB2").text(contentSetsBB[category].headers[1]);
        $(".projectB3").text(contentSetsBB[category].headers[2]);

        // Update accordion body content
        $("#collapseB1 .accordion-body").html(contentSetsBB[category].contents[0]);
        $("#collapseB2 .accordion-body").html(contentSetsBB[category].contents[1]);
        $("#collapseB3 .accordion-body").html(contentSetsBB[category].contents[2]);
    }
    // Handle accordion selection to update carousel
    $(".accordion-button").on("click", function() {
        // Get the index based on which accordion item was clicked
        let itemIndex = $(this).closest(".accordion-item").index();
        
        // Determine which category is currently active
        let activeCategory = "webapps"; // Default
        
        // Look for data attribute or class on page that indicates active category
        if ($(".active-category").length) {
            activeCategory = $(".active-category").data("category");
        }
        
        // Update carousel images based on the selected accordion item
        updateCarouselAA(activeCategory);
    });

    $(".accordion-button").on("click", function() {
        // Get the index based on which accordion item was clicked
        let itemIndex = $(this).closest(".accordion-item").index();
        
        // Determine which category is currently active
        let activeCategory = "webapps"; // Default
        
        // Look for data attribute or class on page that indicates active category
        if ($(".active-category").length) {
            activeCategory = $(".active-category").data("category");
        }
        
        // Update carousel images based on the selected accordion item
        updateCarouselBB(activeCategory);
    });


    // Function to update carousel images
    function updateCarouselAA(category) {
        if (!contentSetsAA[category] || !contentSetsAA[category].carouselImages) return;
        
        // Get the images for the selected category
        const images = contentSetsAA[category].carouselImages;
        
        // Update carousel images
        $("#carouselIndicatorsAA .carousel-item").each(function(index) {
            if (index < images.length) {
                $(this).find("img").attr("src", images[index]);
            }
        });
    }
    function updateCarouselBB(category) {
        if (!contentSetsBB[category] || !contentSetsBB[category].carouselImages) return;
        
        // Get the images for the selected category
        const images = contentSetsBB[category].carouselImages;
        
        // Update carousel images
        $("#carouselIndicatorsBB .carousel-item").each(function(index) {
            if (index < images.length) {
                $(this).find("img").attr("src", images[index]);
            }
        });
    }

    // Initialize with default content
    updateAccordionAA("webapps");
    updateAccordionBB("vscode");
});
