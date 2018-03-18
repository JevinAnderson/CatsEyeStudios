import React from 'react';
import PropTypes from 'prop-types';

import './the-experience.scss';
import ContentHeader from '../components/shared/content-header';
import Content from '../components/shared/content';
import Copy from '../components/shared/copy';
import Disclaimer from '../components/shared/disclaimer';

const SubHeader = ({ children }) => <h2 className="the-experience__sub-header">{children}</h2>;

const PageCopy = ({ children }) => (
  <Copy className="the-experience__copy" centered>
    {children}
  </Copy>
);

const TheExperience = props => (
  <div className="the-experience main-background">
    <Content>
      <SubHeader>Your Consultation</SubHeader>
      <PageCopy>
        A portrait is about so much more than simply capturing your likeness. That is why we take special care in
        getting to know you and learning about your values and needs. We will address all of your concerns, desires and
        ideas. Together we will create a session plan including your wardrobe, hair and makeup, session location, where
        the finished artworks will be displayed in your home and at the end we will go over your investment.
      </PageCopy>
      <SubHeader>Your Session</SubHeader>
      <PageCopy>
        Whether in the studio or on location, every detail will be prepared for you. Relax and have fun being pampered
        by our professional hair and makeup artist and directed by our skilled photographer. Even the most camera-shy
        clients have enjoyed their time with us and were amazed how effortless and beautiful their portraits turned out.
      </PageCopy>
      <SubHeader>Reveal and Ordering Appointment</SubHeader>
      <PageCopy>
        This is the most valuable part of your portrait experience with us! Meeting you in the comfort of your home, Cat
        will reveal your photos using an artistically created slideshow. Her experience and creative eye will be
        completely at your disposal for you to ask questions about products, sizing, mounting options, and more. She
        will help transform the tedious and scary task of making decisions into an absolutely effortless and enjoyable
        experience.
      </PageCopy>
      <SubHeader>Delivery</SubHeader>
      <PageCopy>
        The most exciting part of your portrait experience is the final reveal of your finished artwork! After our
        rigorous inspection of your artwork, Cat will personally package and carefully deliver everything to your home.
      </PageCopy>
      <img src="images/present.jpg" alt="gift wrapped present" className="the-experience__present" />
    </Content>
  </div>
);

export default TheExperience;
