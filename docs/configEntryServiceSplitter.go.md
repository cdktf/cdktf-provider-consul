# `consul_config_entry_service_splitter`

Refer to the Terraform Registory for docs: [`consul_config_entry_service_splitter`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter).

# `configEntryServiceSplitter` Submodule <a name="`configEntryServiceSplitter` Submodule" id="@cdktf/provider-consul.configEntryServiceSplitter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceSplitter <a name="ConfigEntryServiceSplitter" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter consul_config_entry_service_splitter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

configentryservicesplitter.NewConfigEntryServiceSplitter(scope Construct, id *string, config ConfigEntryServiceSplitterConfig) ConfigEntryServiceSplitter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig">ConfigEntryServiceSplitterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig">ConfigEntryServiceSplitterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits">PutSplits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetMeta">ResetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetPartition">ResetPartition</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutSplits` <a name="PutSplits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits"></a>

```go
func PutSplits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetId"></a>

```go
func ResetId()
```

##### `ResetMeta` <a name="ResetMeta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetMeta"></a>

```go
func ResetMeta()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetPartition"></a>

```go
func ResetPartition()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceSplitter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

configentryservicesplitter.ConfigEntryServiceSplitter_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

configentryservicesplitter.ConfigEntryServiceSplitter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

configentryservicesplitter.ConfigEntryServiceSplitter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

configentryservicesplitter.ConfigEntryServiceSplitter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConfigEntryServiceSplitter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigEntryServiceSplitter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigEntryServiceSplitter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceSplitter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splits">Splits</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList">ConfigEntryServiceSplitterSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.metaInput">MetaInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splitsInput">SplitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.meta">Meta</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Splits`<sup>Required</sup> <a name="Splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splits"></a>

```go
func Splits() ConfigEntryServiceSplitterSplitsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList">ConfigEntryServiceSplitterSplitsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetaInput`<sup>Optional</sup> <a name="MetaInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.metaInput"></a>

```go
func MetaInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `SplitsInput`<sup>Optional</sup> <a name="SplitsInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splitsInput"></a>

```go
func SplitsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.meta"></a>

```go
func Meta() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceSplitterConfig <a name="ConfigEntryServiceSplitterConfig" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

&configentryservicesplitter.ConfigEntryServiceSplitterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Splits: interface{},
	Id: *string,
	Meta: *map[string]*string,
	Namespace: *string,
	Partition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.name">Name</a></code> | <code>*string</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.splits">Splits</a></code> | <code>interface{}</code> | splits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.meta">Meta</a></code> | <code>*map[string]*string</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.partition">Partition</a></code> | <code>*string</code> | Specifies the admin partition to apply the configuration entry. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#name ConfigEntryServiceSplitter#name}

---

##### `Splits`<sup>Required</sup> <a name="Splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.splits"></a>

```go
Splits interface{}
```

- *Type:* interface{}

splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#splits ConfigEntryServiceSplitter#splits}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.meta"></a>

```go
Meta *map[string]*string
```

- *Type:* *map[string]*string

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#meta ConfigEntryServiceSplitter#meta}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

### ConfigEntryServiceSplitterSplits <a name="ConfigEntryServiceSplitterSplits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

&configentryservicesplitter.ConfigEntryServiceSplitterSplits {
	Service: *string,
	Weight: *f64,
	Namespace: *string,
	Partition: *string,
	RequestHeaders: github.com/cdktf/cdktf-provider-consul-go/consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders,
	ResponseHeaders: github.com/cdktf/cdktf-provider-consul-go/consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders,
	ServiceSubset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.service">Service</a></code> | <code>*string</code> | Specifies the name of the service to resolve. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.weight">Weight</a></code> | <code>*f64</code> | Specifies the percentage of traffic sent to the set of service instances specified in the `service` field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.namespace">Namespace</a></code> | <code>*string</code> | Specifies the namespace to use in the FQDN when resolving the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.partition">Partition</a></code> | <code>*string</code> | Specifies the admin partition to use in the FQDN when resolving the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.requestHeaders">RequestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | request_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.responseHeaders">ResponseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | response_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.serviceSubset">ServiceSubset</a></code> | <code>*string</code> | Specifies a subset of the service to resolve. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.service"></a>

```go
Service *string
```

- *Type:* *string

Specifies the name of the service to resolve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#service ConfigEntryServiceSplitter#service}

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Specifies the percentage of traffic sent to the set of service instances specified in the `service` field.

Each weight must be a floating integer between `0` and `100`. The smallest representable value is `.01`. The sum of weights across all splits must add up to `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#weight ConfigEntryServiceSplitter#weight}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Specifies the namespace to use in the FQDN when resolving the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Specifies the admin partition to use in the FQDN when resolving the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.requestHeaders"></a>

```go
RequestHeaders ConfigEntryServiceSplitterSplitsRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#request_headers ConfigEntryServiceSplitter#request_headers}

---

##### `ResponseHeaders`<sup>Optional</sup> <a name="ResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.responseHeaders"></a>

```go
ResponseHeaders ConfigEntryServiceSplitterSplitsResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

response_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#response_headers ConfigEntryServiceSplitter#response_headers}

---

##### `ServiceSubset`<sup>Optional</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.serviceSubset"></a>

```go
ServiceSubset *string
```

- *Type:* *string

Specifies a subset of the service to resolve.

A service subset assigns a name to a specific subset of discoverable service instances within a datacenter, such as `version2` or `canary`. All services have an unnamed default subset that returns all healthy instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#service_subset ConfigEntryServiceSplitter#service_subset}

---

### ConfigEntryServiceSplitterSplitsRequestHeaders <a name="ConfigEntryServiceSplitterSplitsRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

&configentryservicesplitter.ConfigEntryServiceSplitterSplitsRequestHeaders {
	Add: *map[string]*string,
	Remove: *[]*string,
	Set: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.add">Add</a></code> | <code>*map[string]*string</code> | Map of one or more key-value pairs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.remove">Remove</a></code> | <code>*[]*string</code> | Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.set">Set</a></code> | <code>*map[string]*string</code> | Map of one or more key-value pairs. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.add"></a>

```go
Add *map[string]*string
```

- *Type:* *map[string]*string

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.remove"></a>

```go
Remove *[]*string
```

- *Type:* *[]*string

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.set"></a>

```go
Set *map[string]*string
```

- *Type:* *map[string]*string

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

### ConfigEntryServiceSplitterSplitsResponseHeaders <a name="ConfigEntryServiceSplitterSplitsResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

&configentryservicesplitter.ConfigEntryServiceSplitterSplitsResponseHeaders {
	Add: *map[string]*string,
	Remove: *[]*string,
	Set: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.add">Add</a></code> | <code>*map[string]*string</code> | Map of one or more key-value pairs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.remove">Remove</a></code> | <code>*[]*string</code> | Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.set">Set</a></code> | <code>*map[string]*string</code> | Map of one or more key-value pairs. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.add"></a>

```go
Add *map[string]*string
```

- *Type:* *map[string]*string

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.remove"></a>

```go
Remove *[]*string
```

- *Type:* *[]*string

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.set"></a>

```go
Set *map[string]*string
```

- *Type:* *map[string]*string

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceSplitterSplitsList <a name="ConfigEntryServiceSplitterSplitsList" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

configentryservicesplitter.NewConfigEntryServiceSplitterSplitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceSplitterSplitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceSplitterSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceSplitterSplitsOutputReference <a name="ConfigEntryServiceSplitterSplitsOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

configentryservicesplitter.NewConfigEntryServiceSplitterSplitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceSplitterSplitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders">PutRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders">PutResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetResponseHeaders">ResetResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetServiceSubset">ResetServiceSubset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeaders` <a name="PutRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders"></a>

```go
func PutRequestHeaders(value ConfigEntryServiceSplitterSplitsRequestHeaders)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---

##### `PutResponseHeaders` <a name="PutResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders"></a>

```go
func PutResponseHeaders(value ConfigEntryServiceSplitterSplitsResponseHeaders)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

##### `ResetResponseHeaders` <a name="ResetResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetResponseHeaders"></a>

```go
func ResetResponseHeaders()
```

##### `ResetServiceSubset` <a name="ResetServiceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetServiceSubset"></a>

```go
func ResetServiceSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference">ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeaders">ResponseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference">ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeadersInput">ResponseHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubsetInput">ServiceSubsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubset">ServiceSubset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeaders"></a>

```go
func RequestHeaders() ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference">ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference</a>

---

##### `ResponseHeaders`<sup>Required</sup> <a name="ResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeaders"></a>

```go
func ResponseHeaders() ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference">ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() ConfigEntryServiceSplitterSplitsRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---

##### `ResponseHeadersInput`<sup>Optional</sup> <a name="ResponseHeadersInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeadersInput"></a>

```go
func ResponseHeadersInput() ConfigEntryServiceSplitterSplitsResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ServiceSubsetInput`<sup>Optional</sup> <a name="ServiceSubsetInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubsetInput"></a>

```go
func ServiceSubsetInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceSubset`<sup>Required</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubset"></a>

```go
func ServiceSubset() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference <a name="ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

configentryservicesplitter.NewConfigEntryServiceSplitterSplitsRequestHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetRemove">ResetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetSet">ResetSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetAdd"></a>

```go
func ResetAdd()
```

##### `ResetRemove` <a name="ResetRemove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetRemove"></a>

```go
func ResetRemove()
```

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetSet"></a>

```go
func ResetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.addInput">AddInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.removeInput">RemoveInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.setInput">SetInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.add">Add</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.remove">Remove</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.set">Set</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.addInput"></a>

```go
func AddInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.removeInput"></a>

```go
func RemoveInput() *[]*string
```

- *Type:* *[]*string

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.setInput"></a>

```go
func SetInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.add"></a>

```go
func Add() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.remove"></a>

```go
func Remove() *[]*string
```

- *Type:* *[]*string

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.set"></a>

```go
func Set() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigEntryServiceSplitterSplitsRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---


### ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference <a name="ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicesplitter"

configentryservicesplitter.NewConfigEntryServiceSplitterSplitsResponseHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetRemove">ResetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetSet">ResetSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetAdd"></a>

```go
func ResetAdd()
```

##### `ResetRemove` <a name="ResetRemove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetRemove"></a>

```go
func ResetRemove()
```

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetSet"></a>

```go
func ResetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.addInput">AddInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.removeInput">RemoveInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.setInput">SetInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.add">Add</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.remove">Remove</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.set">Set</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.addInput"></a>

```go
func AddInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.removeInput"></a>

```go
func RemoveInput() *[]*string
```

- *Type:* *[]*string

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.setInput"></a>

```go
func SetInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.add"></a>

```go
func Add() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.remove"></a>

```go
func Remove() *[]*string
```

- *Type:* *[]*string

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.set"></a>

```go
func Set() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigEntryServiceSplitterSplitsResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---



