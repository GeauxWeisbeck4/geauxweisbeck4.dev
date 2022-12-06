import lume from "lume/mod.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import windi_css from "lume/plugins/windi_css.ts";
import jsx from "lume/plugins/jsx.ts";


const site = lume();

site.use(lightningcss());
site.use(windi_css());
site.use(jsx());


export default site;
