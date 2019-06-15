$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
      skills: [
        {
        skill: "Communication Skills",
        level: "•••••"
    }, 
    {
        skill: "Leadership",
        level: "•••••"
    }, 
    {
        skill: "Strategic Planning",
        level: "•••"
    }, 
    {
        skill: "Project Scheduling",
        level: "••••"
    }, 
    {
        skill: "Management Skills",
        level: "••••"
    }, 
    {
        skill: "Problem-Solving",
        level: "•••••"
    }, 
    {
        skill: "Interpersonal Skills",
        level: "••••"
    }, 
    {
        skill: "Time Management",
        level: "••••"
    }
  ],
  show: true
    })
      $("#skillsSec").html(rendered);
  });