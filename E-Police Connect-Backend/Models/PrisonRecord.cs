using System;
using System.Collections.Generic;

namespace E_Police_Connect.Models;

public partial class PrisonRecord
{
    public int PrisonId { get; set; }

    public int CriminalId { get; set; }

    public string PrisonName { get; set; } = null!;

    public int SentenceYears { get; set; }

    public DateOnly ReleaseDate { get; set; }

    public virtual Criminal Criminal { get; set; } = null!;
}
