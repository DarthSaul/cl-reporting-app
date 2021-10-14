import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPowerOff,
    faWifi,
    faUserShield
} from '@fortawesome/free-solid-svg-icons';

const Deployment = () => {
    return (
        <div className='deployment-container'>
            <div className='card'>
                <ul>
                    <li>
                        <FontAwesomeIcon
                            icon={faWifi}
                            className='deploy-icon'
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Delectus, eligendi cumque ducimus, ipsam ipsa
                            enim quaerat amet
                        </p>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faPowerOff}
                            className='deploy-icon'
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Delectus, eligendi cumque ducimus, ipsam ipsa
                            enim quaerat amet minus molestias dolores officiis
                            molestiae, eaque itaque distinctio nam magnam
                            necessitatibus quisquam in!
                        </p>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faPowerOff}
                            className='deploy-icon'
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Delectus, eligendi cumque ducimus, ipsam ipsa
                            enim quaerat amet minus molestias dolores
                        </p>
                    </li>
                </ul>
            </div>
            <div className='card'>
                <ul>
                    <li>
                        <FontAwesomeIcon
                            icon={faUserShield}
                            className='deploy-icon'
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </li>{' '}
                    <li>
                        <FontAwesomeIcon
                            icon={faUserShield}
                            className='deploy-icon'
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Deployment;
