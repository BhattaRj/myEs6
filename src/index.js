
import { PortfolioController } from './portfolio/portfolio-controller'

init();

function init() {
    var pc = new PortfolioController();
    pc.loadProtfolio();
    // var pc2=new PortfolioController();
    // pc2.loadProtfolio();
}