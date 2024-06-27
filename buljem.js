
$("input").focus(function() {
          $("body").addClass("input-focused");
        });
        $("input").focusout(function() {
          $("body").removeClass("input-focused");
        });

        var host = window.location.host;        
        var curr_host = "tuyulmenangis.com";
        var agent_url = "https://tuyulmenangis.com";
        
        console.log(host, curr_host, agent_url , agent_url.includes(host));
        
        if(host != curr_host && !agent_url.includes(host)){
                      
            location.href = "https://tuyulmenangis.com";           
        }
