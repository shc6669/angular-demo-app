export class UsersTable {
  public static users: any = [
    {
      id: 1,
      username: 'shc6669',
      password: 'admin123',
      email: 'admin@demo.com',
      authToken: 'auth-token-8f3ae836da744329a6f93bf20594b5cc',
      refreshToken: 'auth-token-f8c137a2c98743f48b643e71161d90aa',
      roles: [1], // Administrator
      pic: './assets/media/avatars/Admin.jpg',
      fullname: 'Chandrayana Putra',
      firstname: 'Chandrayana',
      lastname: 'Putra',
      occupation: 'Full Stack Developer',
      companyName: 'Freelance',
      phone: '+6281325999717',
      language: 'en',
      timeZone: 'WITA',
      website: 'https://chandrayana.com',
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
      },
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      address: {
        addressLine: 'Jalan Praja IV no 5',
        city: 'Denpasar',
        state: 'Denpasar',
        postCode: '80113',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/admin',
        facebook: 'https://facebook.com/admin',
        twitter: 'https://twitter.com/admin',
        instagram: 'https://instagram.com/admin',
      },
    },
    {
      id: 2,
      username: 'user',
      password: 'userdemo',
      email: 'user@demo.com',
      authToken: 'auth-token-6829bba69dd3421d8762-991e9e806dbf',
      refreshToken: 'auth-token-f8e4c61a318e4d618b6c199ef96b9e55',
      roles: [2], // User
      pic: './assets/media/avatars/User3.jpg',
      fullname: 'Green Day',
      firstname: 'Green',
      lastname: 'Day',
      occupation: 'User Tester',
      companyName: 'Gojek',
      phone: '+62123456789',
      language: 'en',
      timeZone: 'International Date Line West',
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
      },
      address: {
        addressLine: '3487  Ingram Road',
        city: 'Greensboro',
        state: 'North Carolina',
        postCode: '27409',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/user',
        facebook: 'https://facebook.com/user',
        twitter: 'https://twitter.com/user',
        instagram: 'https://instagram.com/user',
      },
    },
    {
      id: 3,
      username: 'guest',
      password: 'guestdemo',
      email: 'guest@demo.com',
      authToken: 'auth-token-d2dff7b82f784de584b60964abbe45b9',
      refreshToken: 'auth-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
      roles: [3], // Guest
      pic: './assets/media/avatars/User1.jpg',
      fullname: 'Orange Fruit',
      firstname: 'Orange',
      lastname: 'Fruit',
      occupation: 'Grab',
      companyName: 'Grab',
      phone: '456669067892',
      language: 'en',
      timeZone: 'International Date Line West',
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
      },
      address: {
        addressLine: '1467  Griffin Street',
        city: 'Phoenix',
        state: 'Arizona',
        postCode: '85012',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/guest',
        facebook: 'https://facebook.com/guest',
        twitter: 'https://twitter.com/guest',
        instagram: 'https://instagram.com/guest',
      },
    },
  ];

  public static tokens: any = [
    {
      id: 1,
      authToken: 'auth-token-' + Math.random(),
      refreshToken: 'auth-token-' + Math.random(),
    },
  ];
}
