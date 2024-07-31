import React from "react";
import Image from 'next/image';
import './styles.teamfight.css'

import Character_1 from '../assets/img/teamfight/character-1.png'
import LiveImg from '../assets/img/teamfight/live-1.png'
import HeartIcon from '../assets/img/teamfight/heart_g.png'
import StrengthIcon from '../assets/img/teamfight/light_b.png'
import AttackIcon from '../assets/img/teamfight/attack.png'
import DefenseIcon from '../assets/img/teamfight/defense.png'
import MethodIcon from '../assets/img/teamfight/method_3.png'
import PanelImg from '../assets/img/teamfight/panel.png'
import SubPanelImg from '../assets/img/teamfight/panel-1.png'
import StartButton from '../assets/img/teamfight/start.png'


function TeamfightComponent() {
    return(
        <div>
            <div className="background"></div>
            <div className="team-fight">
                <div className="left-team">
                    <div className="selected-soldier-x">
                        <div className="soldier-profile">
                            <div className="soldier-avatar">
                                <Image src={Character_1} alt="avatar" />
                            </div>
                            <div className="soldier-lives">
                                <Image src={LiveImg} alt="live" />
                                <Image src={LiveImg} alt="live" />
                                <Image src={LiveImg} alt="live" />
                            </div>
                        </div>
                        <div className="soldier-info">
                            <div className="soldier-data">
                                <div className="name">Willow Gigglesworth</div>
                                <div className="level">Lv.47</div>
                            </div>
                            <div className="heart-amount">
                                <Image src={HeartIcon} alt="heart" />
                                <div className="heart-bar-x">
                                    <div className="heart-bar-color">100/90</div>
                                </div>
                            </div>
                            <div className="strength-amount">
                                <Image src={StrengthIcon} alt="heart" />
                                <div className="strength-bar">
                                    <div className="strength-bar-color-x"></div>
                                    <div className="strength-bar-color-x"></div>
                                    <div className="strength-bar-color-y"></div>
                                </div>
                            </div>
                            <div className="attack-defense">
                                <div className="attack-amount">
                                    <Image src={AttackIcon} alt="attack" />
                                    <div className="attack-bar-x">
                                        <div className="attack-bar-color">8</div>
                                    </div>
                                </div>
                                <div className="defense-amount">
                                    <Image src={DefenseIcon} alt="defense" />
                                    <div className="defense-bar-x">
                                        <div className="defense-bar-color">5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="playground-x">
                        <div className="soliders-x">
                            <div className="soldier">
                                <div className="character">
                                    <Image src={Character_1} alt="character" />
                                </div>
                                <div className="tag">
                                    <div className="method">
                                        <Image src={MethodIcon} alt="method" />
                                    </div>
                                    <div className="data">
                                        <div className="top">
                                            <div>Mary Sporecraft</div>
                                            <div>Lv25</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-color"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="soldier">
                                <div className="character">
                                    <Image src={Character_1} alt="character" />
                                </div>
                                <div className="tag">
                                    <div className="method">
                                        <Image src={MethodIcon} alt="method" />
                                    </div>
                                    <div className="data">
                                        <div className="top">
                                            <div>Mary Sporecraft</div>
                                            <div>Lv25</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-color"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="soliders-y">
                            <div className="soldier">
                                <div className="character">
                                    <Image src={Character_1} alt="character" />
                                </div>
                                <div className="tag">
                                    <div className="method">
                                        <Image src={MethodIcon} alt="method" />
                                    </div>
                                    <div className="data">
                                        <div className="top">
                                            <div>Mary Sporecraft</div>
                                            <div>Lv25</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-color"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="soldier">
                                <div className="character">
                                    <Image src={Character_1} alt="character" />
                                </div>
                                <div className="tag">
                                    <div className="method">
                                        <Image src={MethodIcon} alt="method" />
                                    </div>
                                    <div className="data">
                                        <div className="top">
                                            <div>Mary Sporecraft</div>
                                            <div>Lv25</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-color"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-team">
                    <div className="selected-soldier-y">
                        <div className="soldier-info">
                            <div className="soldier-data">
                                <div className="name">Willow Gigglesworth</div>
                                <div className="level">Lv.47</div>
                            </div>
                            <div className="heart-amount">
                                <div className="heart-bar-y">
                                    <div className="heart-bar-color">100/90</div>
                                </div>
                                <Image src={HeartIcon} alt="heart" />
                            </div>
                            <div className="strength-amount">
                                <div className="strength-bar">
                                    <div className="strength-bar-color-y"></div>
                                    <div className="strength-bar-color-x"></div>
                                    <div className="strength-bar-color-x"></div>
                                </div>
                                <Image src={StrengthIcon} alt="heart" />
                            </div>
                            <div className="attack-defense">
                                <div className="attack-amount">
                                    <div className="attack-bar-y">
                                        <div className="attack-bar-color">8</div>
                                    </div>
                                    <Image src={AttackIcon} alt="attack" />
                                </div>
                                <div className="defense-amount">
                                    <div className="defense-bar-y">
                                        <div className="defense-bar-color">5</div>
                                    </div>
                                    <Image src={DefenseIcon} alt="defense" />
                                </div>
                            </div>
                        </div>
                        <div className="soldier-profile">
                            <div className="soldier-avatar">
                                <Image src={Character_1} alt="avatar" />
                            </div>
                            <div className="soldier-lives">
                                <Image src={LiveImg} alt="live" />
                                <Image src={LiveImg} alt="live" />
                                <Image src={LiveImg} alt="live" />
                            </div>
                        </div>
                    </div>
                    <div className="playground-x">
                        <div className="soliders-x">
                            <div className="soldier">
                                <div className="character">
                                    <Image src={Character_1} alt="character" />
                                </div>
                                <div className="tag">
                                    <div className="method">
                                        <Image src={MethodIcon} alt="method" />
                                    </div>
                                    <div className="data">
                                        <div className="top">
                                            <div>Mary Sporecraft</div>
                                            <div>Lv25</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-color"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="soldier">
                                <div className="character">
                                    <Image src={Character_1} alt="character" />
                                </div>
                                <div className="tag">
                                    <div className="method">
                                        <Image src={MethodIcon} alt="method" />
                                    </div>
                                    <div className="data">
                                        <div className="top">
                                            <div>Mary Sporecraft</div>
                                            <div>Lv25</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-color"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="soliders-y">
                            <div className="soldier">
                                <div className="character">
                                    <Image src={Character_1} alt="character" />
                                </div>
                                <div className="tag">
                                    <div className="method">
                                        <Image src={MethodIcon} alt="method" />
                                    </div>
                                    <div className="data">
                                        <div className="top">
                                            <div>Mary Sporecraft</div>
                                            <div>Lv25</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-color"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="soldier">
                                <div className="character">
                                    <Image src={Character_1} alt="character" />
                                </div>
                                <div className="tag">
                                    <div className="method">
                                        <Image src={MethodIcon} alt="method" />
                                    </div>
                                    <div className="data">
                                        <div className="top">
                                            <div>Mary Sporecraft</div>
                                            <div>Lv25</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-color"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="battle-plan">
                <Image src={PanelImg} alt="panel" />
                <div className="battle-plan-panel">
                    <div className="top">
                        <div className="panel-title">Battle Plan</div>
                        <div className="panel-reset">Reset</div>
                    </div>
                    <div className="sub-panels">
                        <div>
                            <Image src={SubPanelImg} alt="sub" />
                            <div className="panel-in">
                                <Image src={Character_1} alt="character" />
                                <Image src={MethodIcon} alt="method" />
                                <Image src={Character_1} alt="character" />
                            </div>
                        </div>
                        <div>
                            <Image src={SubPanelImg} alt="sub" />
                            <div className="panel-in">
                                <Image src={Character_1} alt="character" />
                                <Image src={MethodIcon} alt="method" />
                                <Image src={Character_1} alt="character" />
                            </div>
                        </div>
                    </div>
                    <div className="sub-panels-y">
                        <div>
                            <Image src={SubPanelImg} alt="sub" />
                            <div className="panel-in">
                                <Image src={Character_1} alt="character" />
                                <Image src={MethodIcon} alt="method" />
                                <Image src={Character_1} alt="character" />
                            </div>
                        </div>
                        <div>
                            <Image src={SubPanelImg} alt="sub" />
                            <div className="panel-in">
                                <Image src={Character_1} alt="character" />
                                <Image src={MethodIcon} alt="method" />
                                <Image src={Character_1} alt="character" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={StartButton} alt="start" />
                </div>
            </div>
        </div>
    )
}

export default TeamfightComponent;