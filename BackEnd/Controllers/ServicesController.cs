using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers;

[ApiController]
[Route("[controller]")]
public class ServicesController : ControllerBase
{
    private static readonly string[] Names = new[]
    {
        "Visita Guiada", "Visita Guiada con Almuerzo", "Almuerzo", "Cena"
    };

     private static readonly string[] Horarios = new[]
    {
        "13:00", "14:00", "14:30", "15:00"
    };

    private readonly ILogger<ServicesController> _logger;

    public ServicesController(ILogger<ServicesController> logger)
    {
        _logger = logger;
    }

    [EnableCors("_myAllowSpecificOrigins")]
    [HttpGet(Name = "GetServicesAvailables")]
    public IEnumerable<Servicio> Get() => Enumerable.Range(1, 5).Select(index => new Servicio
    {
        Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)).ToLongDateString(),
        Time = Horarios[Random.Shared.Next(Horarios.Length)],
        Name = Names[Random.Shared.Next(Names.Length)]
    })
            .ToArray();
}
