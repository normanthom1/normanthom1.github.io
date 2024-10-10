/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Ministry of Social Development (MSD)',
    position: 'Senior Data Scientist',
    url: 'www.msd.govt.nz',
    startDate: '2021-04',
    summary: `The Ministry of Social Development (MSD) in New Zealand provides support to individuals,
              families, and communities through social services, income assistance, and employment 
              support. Its mission is to help New Zealanders be safe, strong, and independent, 
              promoting well-being and social inclusion. Highlights of my work at the Ministry of Social Development
              includes helping the Ministry to realease more data and analytical products to Maori and hear more about our clients (or New Zealanders'
              that we serve voice, leading data and analytics to inform a project that `,
    highlights: [
      'Developed a natural language processing tool to assist MSD in understanding customer feedback more efficiently. ',
      "Led data and analytics efforts for driver's license training in New Zealand",
      'Managed the upgrade of a geospatial platform used by 5,000+internal users.',
      'Developed a funding model that allocates funding for childcare providers across New Zealand.',
    ],
  },
  {
    name: 'Ministry of Social Development (MSD)',
    position: 'Senior GIS Analyst',
    url: 'www.msd.govt.nz',
    startDate: '2020-02',
    summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
    YC companies.`,
    highlights: [
      'Created the InstaSafe. Fast, automated investment docs for YC companies.',
      'Advise several startups in the fund.',
    ],
  },
  {
    name: 'Ministry for Primary Industries',
    position: 'Co-founder & C.T.O.',
    url: 'https://www.mpi.govt.nz/',
    startDate: '2016-07',
    endDate: '2020-02',
    summary: `The Ministry of Social Development (MSD) in New Zealand provides support to individuals,
              families, and communities through social services, income assistance, and employment support. Its mission is to help New Zealanders be safe, strong, and independent, promoting well-being and social inclusion.`,
    highlights: [
      'Gained experience working in emergency response - clear communication and calm working style meant that I worked well in these high pressure situations',
      'Identified and then automated processes to assess eligibility of forestry blocks to enter the emmissions training scheme',
      "Set and communicated team priorities that supported the broader organization's goals. Aligned strategy, processes, and decision-making across teams.",
    ],
  },
  {
    name: 'Land Information New Zealand (LINZ)',
    position: 'GIS Intern',
    url: 'https://www.linz.govt.nz/',
    startDate: '2016-09-01',
    endDate: '2018-01-01',
    summary: `Enveritas is a non-profit that works with coffee farmers to improve their livelihoods.
    I joined on day one and helped build a variety of tools to collect and analyze data. I also advised
    on technical strategy, helped hire engineers, and advised on their YC application.`,
    highlights: [
      'Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.',
      'Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.',
      "Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM's, and other techniques.",
    ],
  },
  {
    name: 'Zenysis',
    position: 'Software Engineering Contractor',
    url: 'https://zenysis.com',
    startDate: '2016-02-01',
    endDate: '2016-03-01',
    summary: `Zenysis develops data analysis and visualization tools for government agencies and international organizations.
    Their solutions help improve decision-making by integrating and analyzing large-scale datasets from various sources.
    I was the second contributor to the codebase. We built data visualization tools and tackled complex data ingestion
    challenges for the Ethiopian Ministry of Health.`,
    highlights: [
      'Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization tools in React and Flask.',
      'Ingested multiple databases with different alphabets, calendars, and without official spellings of geographic locations.',
    ],
  },
  {
    name: 'Matroid',
    position: 'Co-founder',
    url: 'https://matroid.com',
    startDate: '2015-07-01',
    endDate: '2016-01-01',
    summary: `Matroid is a computer vision platform for creating and deploying detectors. Detectors help customers identify objects,
    events, or patterns in images and videos without requiring machine learning or coding expertise. I played a crucial role in
    defining the company's vision. I was responsible for architecting and building the initial product. I left shortly after the
    Series A to focus on Arthena.`,
    highlights: [
      'Developed end to end machine learning pipeline to train visual classifiers from keywords using Caffe, Node.JS, Redis, MongoDB, and other technologies.',
    ],
  },
  {
    name: 'Planet',
    position: 'Missions Intern',
    url: 'https://planet.com',
    startDate: '2014-06-01',
    endDate: '2015-01-01',
    highlights: [
      'Built models to improve image quality, signal to noise ratio, and dynamic range.',
      'Performed statistical analysis of image quality in Matlab and Python.  Developed flight software in C++.',
      'Organized first hackathon, prototyped hardware, and designed and built photography equipment for rocket launches.',
    ],
  },
  {
    name: 'Planetary Resources',
    position: 'Avionics Intern',
    startDate: '2014-01-01',
    endDate: '2014-05-01',
    url: 'http://planetaryresources.com',
    highlights: [
      'Developed simulations in Matlab for Attitude Determination and Control Subsystem.',
      'Developed processes for in lab testing and characterization of various subsystems.',
      'Assembled flight hardware in cleanroom.',
    ],
  },
  {
    name: 'Facebook',
    position: 'Software Engineer Intern',
    url: 'https://facebook.com',
    startDate: '2013-06-01',
    endDate: '2013-09-01',
    highlights: [
      'Developed software in python for automated testing of servers.',
      'Performed statistical analysis with R, HIVE to assist in triage of malfunctioning servers.',
      "Worked with vendors and ODM's during triage to assist in risk mitigation.",
    ],
  },
  {
    name: 'SEDS-USA',
    position: 'At Large Board Member',
    url: 'http://seds.org',
    startDate: '2013-10-01',
    endDate: '2014-10-01',
    highlights: [
      "Elected to Board of Directors of the USA's largest student space advocacy group based on 5+ years of work with SEDS.",
      'Responsibilities included: organizational strategy, conference presentations, fundraising, special projects, promoting SEDS nationally and internationally, and photographing conferences.',
    ],
  },
  {
    name: 'UB Nanosatellite Program',
    position: 'Co-founder, Program Manager',
    url: 'https://ubnl.space/',
    startDate: '2010-10-01',
    endDate: '2012-06-01',
    highlights: [
      'Coauthored grant to build a multi-spectral imaging satellite as part of the AFRL University Nanosatellite Program.',
      'Lead a team of 60 students through satellite development life cycle. Served as a technical expert, acquired intimate working knowledge of satellite subsystems.  Solicited funding through NASA, AFOSR, and several corporate sponsors.',
    ],
  },
];

export default work;
