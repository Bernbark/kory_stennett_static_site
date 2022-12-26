import TitleCard from '../components/UI/TitleCard';
import Card from '../components/UI/Card';
import TwoFrameCard from '../components/UI/TwoFrameCard';
import LinkSlot from '../components/UI/LinkSlot';
import Warning from '../components/UI/Warning';
function ProjectsPage(){
    return <div>
        <div>
            <TitleCard>
                <h1>
                    Projects
                </h1>
            </TitleCard>
            <section>
            
                    <Card>
                        <h2>
                            External Links
                            
                        </h2>
                    </Card>
                        <Warning>
                        <LinkSlot>
                            <div>
                            <a href='https://github.com/Bernbark'>Personal Github</a>
                            </div>
                            
                        </LinkSlot>
                        
                        </Warning>
                        <Warning>
                        <LinkSlot>
                            <div>
                            <a href='https://github.com/BernbarkProfessional'>Secondary Github</a>
                            </div>
                            
                        </LinkSlot>
                        
                        </Warning>
                    
                        <Warning>
                        <LinkSlot>
                            <div>
                            <a href='https://bernbarkprofessional.github.io/'>Experimental Website</a>
                            </div>
                            
                        </LinkSlot>
                        </Warning>
                    
            </section>
            
        </div>
    </div>
    
}
export default ProjectsPage;