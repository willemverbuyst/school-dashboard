describe('School-daschboard api', () => {
	context('GET /public/teachers', () => {
		it('should return a list with all teachers including user names', () => {
			cy.request({
				method: 'GET',
				url: '/teachers',
			}).should(response => {
				cy.log(JSON.stringify(response.body))

				expect(response.status).to.eq(200)
				expect(response.body.results).to.eq(4)
				expect(response.body.data.length).to.be.eq(4)
				expect(response.body.data[0]).to.have.all.keys(
					'id',
					'schoolId',
					'userId',
					'user'
				)
				expect(response.body.data[0].user).to.have.all.keys('userName')
			})
		})
	})
})
