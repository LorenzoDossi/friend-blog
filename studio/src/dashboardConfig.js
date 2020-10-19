export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8dfd543eede533a2070336',
                  title: 'Sanity Studio',
                  name: 'friend-blog-studio',
                  apiId: 'bfb2876c-e3cf-4a44-b116-5075abb117a4'
                },
                {
                  buildHookId: '5f8dfd54f5e5d1359701f4bc',
                  title: 'Blog Website',
                  name: 'friend-blog',
                  apiId: '35dec4c6-b03d-4a4e-acea-e9af44223d4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LorenzoDossi/friend-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://friend-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
