// Import images

import python from '../images/python_sample.jpg';
import flutter from '../images/flutter.jpg';
import oops1 from '../images/oops1.jpg';
import tailwindCSS from '../images/css_reactjs.jpg';
import static_site from '../images/static_site.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Medical services booking',
		category: 'Flutter(Android/ios) Application\nMade using Dart-Flutter and al loads of APIs.',
		img: flutter,
		ProjectHeader: {
			title: 'Complete Flutter App',
			tags: 'Front-end + Back-end',
		},
	},
	{
		id: 2,
		title: 'OOPs Project',
		category: 'Hostel Management Console Application\nTech : DSA, Files Handling and Data Management',
		img: oops1,
	},
	{
		id: 3,
		title: 'Python Projects',
		category: 'Computer Games/Applications\nAutomatic Mail Sender,A lots of Games and Tkinter Games, etc',
		img: python,
	},
	{
		id: 4,
		title: 'HTML+CSS',
		category: 'Informative Web-site for the flutter project\nUsing TailwindCSS & ReactJS ',
		img: static_site,
	},
	{
		id: 5,
		title: 'React+ TailwindCSS Website',
		category: 'Web Application ',
		img: tailwindCSS,
	},
];
