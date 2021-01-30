import Fetch from "./Fetch.js";

const p = new Fetch("eevee", "#149414");
p.fetch();


const inval = new Fetch(null, null);
inval.fetch();