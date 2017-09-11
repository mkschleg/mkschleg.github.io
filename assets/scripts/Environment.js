//Environment Base Class

define([], function () {

  var EnvironmentController = function (EnvModel, EnvVisual, AgVisual, c) {

    var EnviornmentModel = EnvModel,
        EnvironmentVisual = EnvVisual,
        AgentVisual = AgVisual,
        canvas = c,
        observation_t, reward_t, termination_t;


    function publicStart(){
      return privateStart();
    }

    function privateStart(){
      console.error("Private Start Not implemented");
    }

    function publicStep(action){
      return privateStep(action);
    }

    function privateStep(action){
      console.error("Private Step Not implemented");
      observation_t, reward_t, termination_t = EnvModel.step(action);
      EnvVisual.draw();
      return observation_t, reward_t, termination_t;
    }

    //listeners
    function publicOnClick(e){
      EnvironmentModel.onClick(e);
      EnvironmentVisual.draw();
      AgentVisual.draw();
    }



    return{
      start:publicStart,
      step:publicStep,
      onClick:publicOnClick
    }


  };

  return Environment;


});
