$(document).ready(function(){
    // The 'What we do'  icons when clicked toggles between the respective description of each icon.
    $("[id=design]").click(function(){
        $(".description").html("<hr><h1>Design<h1/><hr><p>Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.</p><hr>");
    })
    $("[id=development]").click(function(){
        $(".description").html("<hr><h1>Development<h1/><hr><p>All engineers are fluent in the latest enterprise, mobile and web development technologies.They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.</p><hr>");
    })
    $("[id=productmgmnt]").click(function(){
        $(".description").html("<hr><h1>Product Management<h1/><hr><p>Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live. This iterative process allows for changes as business requirements evolve.</p><hr>");
    })

    // JQuery to create a Hover effect for the Portfolio sections such that on hover a white box(tooltip) 
    // appears with then name of the project inside. The project picture is still visible in the background. 

    $("[id=jimcarrey").mouseover(function(){
        $("[id=jimcarrey").toolTip();
    })
    $("[id=orange").mouseover(function(){
        $("[id=orange").toolTip();
    })
    $("[id=mightyontario").mouseover(function(){
        $("[id=mightyontario").toolTip();
    })
    $("[id=elena").mouseover(function(){
        $("[id=elena").toolTip();
    })
    $("[id=blackbox").mouseover(function(){
        $("[id=blackbox").toolTip();
    })
    $("[id=agecontrol").mouseover(function(){
        $("[id=agecontrol").toolTip();
    })
    $("[id=burnedC").mouseover(function(){
        $("[id=burnedC").toolTip();
    })
    $("[id=giraffe").mouseover(function(){
        $("[id=giraffe").toolTip();
    })

    $("form").submit(function(event){
        event.preventDefault();
        var name = $("input[name='name']",this).val();
        var email = $("input[name='email']",this).val();
        window.alert(name + ' we have received your message. Thank you for reaching out to us!');
      });
});