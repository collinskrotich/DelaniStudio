$(document).ready(function(){
    $("[id=design]").click(function(){
        $(".description").html("<hr><h1>Design<h1/><hr><p>Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.</p><hr>");
    })
    $("[id=development]").click(function(){
        $(".description").html("<hr><h1>Development<h1/><hr><p>All engineers are fluent in the latest enterprise, mobile and web development technologies.They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.</p><hr>");
    })
    $("[id=productmgmnt]").click(function(){
        $(".description").html("<hr><h1>Product Management<h1/><hr><p>Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live. This iterative process allows for changes as business requirements evolve.</p><hr>");
    })

});