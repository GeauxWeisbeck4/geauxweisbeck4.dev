import lume from "lume/mod.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import windi_css from "lume/plugins/windi_css.ts";


const site = lume();

site.use(lightningcss());
site.use(windi_css());


export default site;
