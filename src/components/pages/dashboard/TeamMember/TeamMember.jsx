import React from 'react'
import { TeamMemberWrap } from './TeamMember.styles'
import { BlockIconBtn, BlockTitle } from '../../../../styles/global/default'
import { AiFillPlusCircle } from 'react-icons/ai';
import { TEAM_MEMBERS_DATA } from '../../../../data/mockData';
import { MdMoreVert } from "react-icons/md";
import Heroes from '../../../../assets/images/superman.jpg';
import Heroes2 from '../../../../assets/images/ironman.jpg';
import Heroes3 from '../../../../assets/images/batman.jpg';

const TeamMember = () => {
  return (
    <TeamMemberWrap>
        <BlockTitle className="teams-head">
            <h3 className="head-ttl">Team Ayanokoji</h3>
            <BlockIconBtn className="head-icon-btn">
                <AiFillPlusCircle />
            </BlockIconBtn>
        </BlockTitle>
        <div className="teams-content">
            <div className="teams-list">
                {
                    TEAM_MEMBERS_DATA?.map((itemData) => {
                        return (
                            <div className="teams-item" key={itemData.id}>
                                <div className="item-content">
                                    <div className="item-img">
                                        <img src={Heroes} alt ="" />
                                        <img src={Heroes2} alt ="" />
                                        <img src={Heroes3} alt ="" />
                                    </div>
                                    <div className="item-info">
                                        <h4 className="item-info-name">{itemData.name}</h4>
                                        <p className="item-info-position">
                                            {itemData.position}
                                        </p>
                                    </div>
                                </div>
                                <button type="button" className="item-action">
                                    <MdMoreVert />
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </TeamMemberWrap>
  )
}

export default TeamMember