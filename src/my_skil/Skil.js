import "./skil.css";
const Skill = () => {
    return (
        <section className="Skill_container" id="Skill">
            <p>مهارت های من</p>
            <div className="Skill_parent">
                {percentSkill("html , css", "90%", 90)}
                {percentSkill("JavaScript", "60%", 60)}
            </div>
            <div className="Skill_parent">
                {percentSkill("React", "50%", 50)}
                {percentSkill("PhotoShop", "60%", 60)}
            </div>
            <div className="Skill_parent">
                {percentSkill("Redux", "40%", 40)}
                {percentSkill("Tailwind", "50%", 50)}
            </div>
            <div className="Skill_parent">
                {percentSkill("Flutter", "50%", 50)}
                {percentSkill("Dart", "50%", 50)}
            </div>
        </section>
    );
}

export default Skill;

function percentSkill(title, percent, width) {
    return (
        <section className="Skill_myskill_container">
            <div>
                <div className="Skill_percent">
                    <p>{title}</p>
                    <p>{percent}</p>
                </div>
                <div className="Skill_line_skill" style={{ width: width + '%' }}>

                </div>
            </div>
        </section>
    )
}