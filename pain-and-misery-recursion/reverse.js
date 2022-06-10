function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) {
    return "";
  }
  const res = reverse(str.substring(1)) + str[0]; //because the base case is empty string then we add to last char n for mason then n gets returned and we add to o
  return res;
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

console.log(reverse("kevinmason"));
console.log(reverse("awesome")); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
console.log(reverse("loohcsmhtir"));
