// Rohr-Clip zum Anschrauben – MESH.ritl Vorlage
/* [Rohr] */
// Rohr-Außendurchmesser (mm)
rohr_d = 22; // [6:0.5:110]
// Öffnung des Clips (Grad)
oeffnung = 100; // [60:5:160]
/* [Halter] */
// Breite des Clips (mm)
breite = 12; // [5:1:40]
// Wandstärke (mm)
wand = 3; // [1.2:0.2:8]
// Abstand Rohr bis Wand (mm)
abstand = 4; // [0:1:40]
// Schraube Durchmesser (mm, 0 = ohne)
schraube = 4.5; // [0:0.5:8]
// Form des Fußes
fuss = "Lasche"; // [Lasche, Schmal]
/* [Hidden] */
$fn = 96;
R = rohr_d/2; Ra = R + wand; H = abstand + wand + R;
L = fuss == "Lasche" ? Ra*2 + 2*(schraube + 6) : Ra*1.6;
module profil() difference() {
  union() {
    translate([0, H]) circle(r = Ra);
    translate([-L/2, 0]) square([L, wand]);
    translate([-Ra*0.8, 0]) square([Ra*1.6, H]);
  }
  translate([0, H]) circle(r = R);
  translate([0, H]) polygon([[0, 0], [3*Ra*sin(-oeffnung/2), 3*Ra*cos(oeffnung/2)], [3*Ra*sin(oeffnung/2), 3*Ra*cos(oeffnung/2)]]);
}
difference() {
  rotate([90, 0, 0]) linear_extrude(height = breite, center = true) profil();
  if (schraube > 0 && fuss == "Lasche") for (s = [-1, 1]) translate([s*(L/2 - schraube/2 - 3), 0, -1]) cylinder(d = schraube, h = wand + 2);
}
