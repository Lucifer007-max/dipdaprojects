import React from 'react';
import Service from './Service/Service'

export default function PGNAAService() {

  const data = `The Gamma-ray On-line Analyzer is a state-of-the-art tool designed for real-time monitoring and precise measurement of gamma radiation levels. This advanced system is used in various industries, including nuclear energy, environmental monitoring, and industrial processes, to ensure safety, efficiency, and compliance with regulatory standards. By leveraging cutting-edge technology, the Gamma-ray On-line Analyzer delivers accurate, continuous data that is essential for monitoring radiation and ensuring that all processes meet the necessary safety criteria.
  The Gamma-ray On-line Analyzer is a state-of-the-art tool designed for real-time monitoring and precise measurement of gamma radiation levels. This advanced system is used in various industries, including nuclear energy, environmental monitoring, and industrial processes, to ensure safety, efficiency, and compliance with regulatory standards. By leveraging cutting-edge technology, the Gamma-ray On-line Analyzer delivers accurate, continuous data that is essential for monitoring radiation and ensuring that all processes meet the necessary safety criteria.`;

  const pageTitle = `Gamma-ray On-line Analyzer Support & Services`;
  const TagLine = `Prompt Gamma Neutron Activation Analysis (PGNAA)`;
  return (
    <Service title={'PGNAA Service'} content={data} pageTitle={pageTitle} TagLine={TagLine} />
  )
}