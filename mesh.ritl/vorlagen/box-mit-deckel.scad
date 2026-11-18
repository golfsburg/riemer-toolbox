// Box mit Deckel – MESH.ritl Vorlage
/* [Maße] */
// Innenbreite (mm)
breite = 60; // [10:1:200]
// Innentiefe (mm)
tiefe = 40; // [10:1:200]
// Innenhöhe (mm)
hoehe = 30; // [5:1:150]
/* [Ausführung] */
// Wandstärke (mm)
wand = 2; // [0.8:0.2:5]
// Eckenradius (mm)
radius = 4; // [0:0.5:20]
// Deckel mit erzeugen
deckel = true;
// Spiel Deckel (mm)
spiel = 0.2; // [0:0.05:0.6]
/* [Hidden] */
$fn = 48;
module rbox(s, r) {
  rr = min(r, s[0]/2 - 0.01, s[1]/2 - 0.01);
  if (rr <= 0) cube(s);
  else hull() for (x = [rr, s[0]-rr], y = [rr, s[1]-rr]) translate([x, y, 0]) cylinder(r = rr, h = s[2]);
}
difference() {
  rbox([breite + 2*wand, tiefe + 2*wand, hoehe + wand], radius + wand);
  translate([wand, wand, wand]) rbox([breite, tiefe, hoehe + 1], radius);
}
if (deckel) translate([0, tiefe + 2*wand + 10, 0]) {
  rbox([breite + 2*wand, tiefe + 2*wand, wand], radius + wand);
  translate([wand + spiel, wand + spiel, wand]) difference() {
    rbox([breite - 2*spiel, tiefe - 2*spiel, 4], max(radius - spiel, 0));
    translate([wand, wand, -1]) rbox([breite - 2*spiel - 2*wand, tiefe - 2*spiel - 2*wand, 6], max(radius - wand, 0));
  }
}
