import React from 'react'
import { SummaryWrap } from './Summary.styles.js'
import { BlockContentWrap } from '../../../../styles/global/default';
import { MdAttachMoney, MdBarChart, MdFileCopy, MdImageSearch, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Icons } from '../../../../assets/icons'
import Flag from '../../../../assets/images/phil.png'

const Summary = () => {
  return (
    <SummaryWrap>
        <div className="dash-board-content">
            <div className="dboard-blocks dboard-summary-blocks">
                <BlockContentWrap className="dboard-block">
                    <div className="summary-block-icon">
                        <MdBarChart />
                    </div>
                    <div className="summary-block-details">
                        <p className="summary-block-ttl">Earnings</p>
                        <div className="summary-block-val">250.2PHP</div>
                    </div>
                </BlockContentWrap>

                <BlockContentWrap className="dboard-block dboard-block-earnings">
                    <div className="summary-block-icon">
                        <MdAttachMoney />
                    </div>
                    <div className="summary-block-details">
                        <p className="summary-block-ttl">Ikaw Monthly</p>
                        <div className="summary-block-val">133.24PHP</div>
                    </div>
                </BlockContentWrap>

                <BlockContentWrap className="dboard-block dboard-block-sales">
                    <div className="summary-block-details">
                        <p className="summary-block-ttl">Sales</p>
                        <div className="summary-block-val">133.24PHP</div>
                        <p className="summary-block-text">
                            <span className="text-percent">50PHP</span>
                            nakaraan pa ng araw
                        </p>
                    </div>
                </BlockContentWrap>

                <BlockContentWrap className="dboard-block dboard-block-balance">
                    <div className="summary-block-icon">
                        <MdAttachMoney />
                    </div>
                    <div className="summary-block-details">
                        <p className="summary-block-ttl">Balance</p>
                        <div className="summary-block-val">533.21PHP</div>
                    </div>
                    <div className="summary-block-dropdown">
                        <button className="dropdown-btn">
                            <span className="dropdown-btn-img">
                                <img src= {Flag} alt="" />
                            </span>
                            <span className="dropdown-btn-icon">
                                <MdOutlineKeyboardArrowDown />
                            </span>
                        </button>
                    </div>
                </BlockContentWrap>

                <BlockContentWrap className="dboard-block dboard-block-earnings">
                    <div className="summary-block-icon">
                        <img src={Icons.CheckPlus} alt="" />
                    </div>
                    <div className="summary-block-details">
                        <p className="summary-block-ttl">New Tasks</p>
                        <div className="summary-block-val">534.99PHP</div>
                    </div>
                </BlockContentWrap>

                <BlockContentWrap className="dboard-block dboard-block-projects">
                    <div className="summary-block-icon">
                      <MdFileCopy />
                    </div>
                    <div className="summary-block-details">
                        <p className="summary-block-ttl">Total Projects</p>
                        <div className="summary-block-val">599</div>
                    </div>
                </BlockContentWrap>
            </div>
        </div>
    </SummaryWrap>
  )
}

export default Summary