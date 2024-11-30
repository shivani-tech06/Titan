// script.js
function showDetails(service) {
    let message = '';
    switch (service) {
      case 'personal-training':
        message = 'Our personal trainers will design a plan specifically for your goals!';
        break;
      case 'group-classes':
        message = 'Enjoy dynamic workouts with our exciting group sessions.';
        break;
      case 'nutrition-plans':
        message = 'Get a personalized nutrition plan that supports your fitness journey.';
        break;
      default:
        message = 'Explore our services to find what suits you best!';
    }
    alert(message);
  }
  