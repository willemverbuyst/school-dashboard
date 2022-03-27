describe('School-daschboard api', () => {
	context('GET /public/schools', () => {
		it('should return a list with all schools', () => {
			cy.request({
				method: 'GET',
				url: '/public/schools',
			}).should(response => {
				cy.log(JSON.stringify(response.body))

				expect(response.status).to.eq(200)
				expect(response.body.results).to.eq(4)
				expect(response.body.data.length).to.be.eq(4)
				expect(response.body.data[0]).to.have.all.keys('id', 'name', 'location')
			})
		})
	})
})
