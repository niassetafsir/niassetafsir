
function toggleCompanion(id, btn) {
  const content = document.getElementById(id);
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !expanded);
  content.classList.toggle('open', !expanded);
  btn.querySelector('.companion-arrow').style.transform = expanded ? '' : 'rotate(180deg)';
}
