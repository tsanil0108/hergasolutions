import { teamPhotos, ceoPhoto } from '../assets/images';

// Row 1 – CEO · Row 2 – Business Heads · Row 3 – Engineering & Business Development.
// To fix a photo mismatch change the `teamPhotos[n]` index (0-based).
export const CEO = { name: 'Pradeep Kumar Herga', role: 'CEO', photo: teamPhotos[4] };

export const HEADS = [
  { name: 'Surendra Manase', role: 'Head – Techno Commercial', photo: teamPhotos[0] },
  { name: 'Harish Udyawar', role: 'Head – Business Development', photo: teamPhotos[2] },
  { name: 'Hanuman Phadtare', role: 'Head – Electricals', photo: teamPhotos[3] },
];

export const SUPPORT = [
  { name: 'Sumant Khot', role: 'Consultant – Engineering', photo: teamPhotos[1] },
  { name: 'Sarvesh Jaiswal', role: 'Assistant Manager – Business Development', photo: ceoPhoto },
];

export const TEAM = [CEO, ...HEADS, ...SUPPORT];