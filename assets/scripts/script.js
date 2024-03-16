function activate_nav_mobile(params) {
  let nav = document.getElementById('nav_mobile')
  let nav_list = document.getElementById('mobile_nav_links')

  nav.classList.toggle('nav_mobile_active')
  nav_list.classList.toggle('nav_mobile_active')
}